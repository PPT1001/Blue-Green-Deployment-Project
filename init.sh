#!/bin/bash
# This script is used to initialize the VMs and other resources using terraform

# Go to the terraform directory
cd terraform

# Validate the terraform
terraform validate

if [ $? -ne 0 ]; then
    echo "Error occurred while validating the terraform"
    exit 1
fi

# Initialize the terraform
terraform init

# Destroy the existing resources
terraform destroy -auto-approve

# Apply the terraform
terraform apply -auto-approve

if [ $? -ne 0 ]; then
    echo "Error occurred while applying the terraform"
    terraform destroy -auto-approve
    exit 1
fi

# Get the IP address of the VM and remove any quotes
inventory=$(terraform output -raw ansible_inventory)

# Go to the ansible directory
cd ../ansible

# Write the inventory to a file
echo "$inventory" > inventory.ini

# Run the ansible playbook
ansible-playbook -i inventory.ini playbook.yml --ssh-common-args='-o StrictHostKeyChecking=no'

if [ $? -ne 0 ]; then
    echo "Error occurred while running the ansible playbook"
    exit 1
fi

# Cluster Configuration
cd ../cluster_config

kubectl create ns webapps
kubectl apply -f service-account.yml
kubectl apply -f role.yml
kubectl apply -f rolebinding.yml
kubectl apply -f sec.yml -n webapps
k8_token=$(kubectl describe secret $(kubectl get secret -n webapps | grep webapps-token | awk '{print $1}') -n webapps | grep token: | awk '{print $2}')
echo $k8_token > k8s_token.txt
echo "Add the k8_token to Jenkins credentials with the ID 'k8-token'"