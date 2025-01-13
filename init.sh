#!/bin/bash
# This script is used to initialize the VMs and other resources using terraform

# Go to the terraform directory
cd terraform

# Initialize the terraform
terraform init

# Validate the terraform
terraform validate

if [ $? -ne 0 ]; then
    echo "Error occurred while validating the terraform"
    exit 1
fi

# Destroy the existing resources
terraform destroy -auto-approve

# Apply the terraform
terraform apply -auto-approve

if [ $? -ne 0 ]; then
    echo "Error occurred while applying the terraform"
    terraform destroy -auto-approve
    exit 1
fi

# Get output values from terraform
subscription_id=$(terraform output -raw subscription_id)
inventory=$(terraform output -raw ansible_inventory)
aks_name=$(terraform output -raw aks_cluster_name)
aks_rg=$(terraform output -raw aks_cluster_rg)

# Get Kube Config
az account set --subscription $subscription_id
az aks get-credentials --resource-group $aks_rg --name $aks_name --overwrite-existing

if [ $? -ne 0 ]; then
    echo "Error occurred while getting the kube config"
    exit 1
fi

# Cluster Configuration
cd ../cluster_config

kubectl create ns webapps
kubectl apply -f service-account.yml
kubectl apply -f role.yml
kubectl apply -f rolebinding.yml
kubectl apply -f sec.yml -n webapps

if [ $? -ne 0 ]; then
    echo "Error occurred while creating the cluster configuration"
    exit 1
fi

k8_token=$(kubectl describe secret token-jenkins -n webapps | grep "token:" | awk '{print $2}')
echo $k8_token > k8s_token.txt
echo "Add the k8_token to Jenkins credentials with the ID 'k8-token'"


# Go to the ansible directory
cd ../ansible

# Write the inventory to a file
echo "$inventory" > inventory.ini

# Run the ansible playbook
ansible-playbook -i inventory.ini playbook.yml --ssh-common-args='-o StrictHostKeyChecking=no'