output "vm_ips" {
  value = {
    sonarqube = azurerm_linux_virtual_machine.sonarqube.public_ip_address
    jenkins   = azurerm_linux_virtual_machine.jenkins.public_ip_address
    nexus     = azurerm_linux_virtual_machine.nexus.public_ip_address
  }
}

output "vm_usernames" {
  value = {
    sonarqube = azurerm_linux_virtual_machine.sonarqube.admin_username
    jenkins   = azurerm_linux_virtual_machine.jenkins.admin_username
    nexus     = azurerm_linux_virtual_machine.nexus.admin_username
  }
}

output "subnet_id" {
  value = azurerm_subnet.main.id
}

output "ansible_inventory" {
  value = <<EOT
[sonarqube]
${azurerm_linux_virtual_machine.sonarqube.public_ip_address} ansible_ssh_user=azureuser ansible_ssh_password=${var.vm_password}

[jenkins]
${azurerm_linux_virtual_machine.jenkins.public_ip_address} ansible_ssh_user=azureuser ansible_ssh_password=${var.vm_password}

[nexus]
${azurerm_linux_virtual_machine.nexus.public_ip_address} ansible_ssh_user=azureuser ansible_ssh_password=${var.vm_password}
EOT
}

