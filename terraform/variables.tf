variable "subscription_id" {
  description = "The subscription ID for the Azure account"
  type        = string
  default     = "dbc63d8e-59a8-4439-8926-698cbb33b503"
}
variable "client_id" {
  description = "The client ID for the Azure Service Principal"
  type        = string
  default     = "f4b3b3b3-3b3b-4b3b-3b3b-3b3b3b3b3b3b"
}
variable "client_secret" {
  description = "The client secret for the Azure Service Principal"
  type        = string
  default     = "3b3b3b3b-3b3b-3b3b-3b3b-3b3b3b3b3b3b"
}
variable "tenant_id" {
  description = "The tenant ID for the Azure account"
  type        = string
  default     = "3b3b3b3b-3b3b-3b3b-3b3b-3b3b3b3b3b3b"
}
variable "location" {
  description = "The location for the Azure resources"
  type        = string
  default     = "East US"
}
variable "resource_group_name" {
  description = "The name of the resource group in which to create the resources"
  type        = string
  default     = "blue-green-deployment-rg"
}
variable "vm_password" {
  description = "The password for the virtual machine"
  type        = string
  default     = "P@ssw0rd1234!"
}