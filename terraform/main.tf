# Main Terraform file to initialize VMs and AKS in Azure

provider "azurerm" {
    features {
        resource_group {
            prevent_deletion_if_contains_resources = false
        }
    }
    subscription_id = var.subscription_id
}

resource "azurerm_resource_group" "main" {
    name     = var.resource_group_name
    location = "Southeast Asia"
}

resource "azurerm_virtual_network" "main" {
    name                = "blue-green-vnet"
    address_space       = ["10.0.0.0/16"]
    location            = azurerm_resource_group.main.location
    resource_group_name = azurerm_resource_group.main.name
}

resource "azurerm_subnet" "main" {
    name                 = "blue-green-subnet"
    resource_group_name  = azurerm_resource_group.main.name
    virtual_network_name = azurerm_virtual_network.main.name
    address_prefixes     = ["10.0.1.0/24"]
}

resource "azurerm_network_security_group" "main" {
    name                = "blue-green-nsg"
    location            = azurerm_resource_group.main.location
    resource_group_name = azurerm_resource_group.main.name

    security_rule {
        name                       = "allow_ssh"
        priority                   = 1001
        direction                  = "Inbound"
        access                     = "Allow"
        protocol                   = "Tcp"
        source_port_range          = "*"
        destination_port_range     = "22"
        source_address_prefix      = "*"
        destination_address_prefix = "*"
    }

    security_rule {
        name                       = "allow_http"
        priority                   = 1002
        direction                  = "Inbound"
        access                     = "Allow"
        protocol                   = "Tcp"
        source_port_range          = "*"
        destination_port_range     = "80"
        source_address_prefix      = "*"
        destination_address_prefix = "*"
    }

    security_rule {
        name                       = "allow_https"
        priority                   = 1003
        direction                  = "Inbound"
        access                     = "Allow"
        protocol                   = "Tcp"
        source_port_range          = "*"
        destination_port_range     = "443"
        source_address_prefix      = "*"
        destination_address_prefix = "*"
    }
}

resource "azurerm_subnet_network_security_group_association" "main" {
    subnet_id                 = azurerm_subnet.main.id
    network_security_group_id = azurerm_network_security_group.main.id
}

resource "azurerm_public_ip" "sonarqube" {
    name                = "sonarqube-pip"
    location            = azurerm_resource_group.main.location
    resource_group_name = azurerm_resource_group.main.name
    allocation_method   = "Static"
}

resource "azurerm_public_ip" "jenkins" {
    name                = "jenkins-pip"
    location            = azurerm_resource_group.main.location
    resource_group_name = azurerm_resource_group.main.name
    allocation_method   = "Static"
}

resource "azurerm_public_ip" "nexus" {
    name                = "nexus-pip"
    location            = azurerm_resource_group.main.location
    resource_group_name = azurerm_resource_group.main.name
    allocation_method   = "Static"
}

resource "azurerm_network_interface" "sonarqube" {
    name                = "sonarqube-nic"
    location            = azurerm_resource_group.main.location
    resource_group_name = azurerm_resource_group.main.name
    ip_configuration {
        name                          = "sonarqube-ipconfig"
        subnet_id                     = azurerm_subnet.main.id
        private_ip_address_allocation = "Dynamic"
        public_ip_address_id          = azurerm_public_ip.sonarqube.id
    }
}

resource "azurerm_network_interface" "jenkins" {
    name                = "jenkins-nic"
    location            = azurerm_resource_group.main.location
    resource_group_name = azurerm_resource_group.main.name
    ip_configuration {
        name                          = "jenkins-ipconfig"
        subnet_id                     = azurerm_subnet.main.id
        private_ip_address_allocation = "Dynamic"
        public_ip_address_id          = azurerm_public_ip.jenkins.id
    }
}

resource "azurerm_network_interface" "nexus" {
    name                = "nexus-nic"
    location            = azurerm_resource_group.main.location
    resource_group_name = azurerm_resource_group.main.name
    ip_configuration {
        name                          = "nexus-ipconfig"
        subnet_id                     = azurerm_subnet.main.id
        private_ip_address_allocation = "Dynamic"
        public_ip_address_id          = azurerm_public_ip.nexus.id
    }
}

resource "azurerm_linux_virtual_machine" "sonarqube" {
    name                            = "sonarqube-vm"
    location                        = azurerm_resource_group.main.location
    resource_group_name             = azurerm_resource_group.main.name
    size                            = "Standard_DS2_v2"
    admin_username                  = "azureuser"
    admin_password                  = var.vm_password
    disable_password_authentication = false
    network_interface_ids           = [azurerm_network_interface.sonarqube.id]

    os_disk {
        caching              = "ReadWrite"
        storage_account_type = "Standard_LRS"
    }

    source_image_reference {
        publisher = "Canonical"
        offer     = "ubuntu-24_04-lts"
        sku       = "server"
        version   = "latest"
    }
}

resource "azurerm_linux_virtual_machine" "jenkins" {
    name                            = "jenkins-vm"
    location                        = azurerm_resource_group.main.location
    resource_group_name             = azurerm_resource_group.main.name
    size                            = "Standard_DS2_v2"
    admin_username                  = "azureuser"
    admin_password                  = var.vm_password
    disable_password_authentication = false
    network_interface_ids           = [azurerm_network_interface.jenkins.id]

    os_disk {
        caching              = "ReadWrite"
        storage_account_type = "Standard_LRS"
    }

    source_image_reference {
        publisher = "Canonical"
        offer     = "ubuntu-24_04-lts"
        sku       = "server"
        version   = "latest"
    }
}

resource "azurerm_linux_virtual_machine" "nexus" {
    name                            = "nexus-vm"
    location                        = azurerm_resource_group.main.location
    resource_group_name             = azurerm_resource_group.main.name
    size                            = "Standard_DS2_v2"
    admin_username                  = "azureuser"
    admin_password                  = var.vm_password
    disable_password_authentication = false
    network_interface_ids           = [azurerm_network_interface.nexus.id]

    os_disk {
        caching              = "ReadWrite"
        storage_account_type = "Standard_LRS"
    }

    source_image_reference {
        publisher = "Canonical"
        offer     = "ubuntu-24_04-lts"
        sku       = "server"
        version   = "latest"
    }
}

resource "azurerm_kubernetes_cluster" "aks" {
    name                = "blue-green-aks"
    location            = azurerm_resource_group.main.location
    resource_group_name = azurerm_resource_group.main.name
    dns_prefix          = "bluegreen"

    default_node_pool {
        name                 = "default"
        node_count           = 3
        vm_size              = "Standard_DS2_v2"
        min_count            = 3
        max_count            = 3
        auto_scaling_enabled = true
    }

    identity {
        type = "SystemAssigned"
    }

    network_profile {
        network_plugin = "azure"
        network_policy = "azure"
    }
}
