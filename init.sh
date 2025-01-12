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

# Apply the terraform
terraform apply -auto-approve

if [ $? -ne 0 ]; then
    echo "Error occurred while applying the terraform"
    terraform destroy -auto-approve
    exit 1
fi

# Get the IP address of the VM
inventory=$(terraform output ansible_inventory)

# Go to the ansible directory
cd ../ansible

# Run the ansible playbook
ansible-playbook -i $inventory playbook.yml