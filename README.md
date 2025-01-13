# Blue-Green Deployment Project

This repository demonstrates a complete CI/CD pipeline for implementing **Blue-Green Deployment** using Jenkins, Kubernetes, Docker, SonarQube, Nexus, Trivy, Ansible and Terraform. It is designed for deploying and managing a **Next.js portfolio application** with automated testing, scanning, and artifact management.

---

## Project Structure

```plaintext
.
├── Dockerfile                  # Docker image definition
├── Jenkinsfile                 # Jenkins pipeline definition
├── README.md                   # Project documentation
├── ansible                     # Configuration management with Ansible
│   ├── ansible.cfg
│   ├── inventory.ini           # Hosts and credentials of VMs
│   ├── playbook.yml
│   └── roles
│       ├── docker              # Role for Docker setup
│       ├── jenkins             # Role for Jenkins setup
│       ├── kubectl             # Role for Kubernetes setup
│       ├── nexus               # Role for Nexus setup
│       ├── npm                 # Role for npm setup
│       ├── sonarqube           # Role for SonarQube setup
│       └── trivy               # Role for Trivy setup
├── app                         # Next.js application source code
├── init.sh                     # Initiliase and Configuring the VMs
├── app-deployment-blue.yml     # Blue environment Kubernetes deployment
├── app-deployment-green.yml    # Green environment Kubernetes deployment
├── portfolio-service.yml       # LoadBalancer to switch between deployments
├── cluster_config              # Kubernetes cluster configuration
├── components                  # Modular React components
├── terraform                   # Terraform configuration for infrastructure provisioning
│   ├── main.tf
│   ├── output.tf
│   └── variables.tf
└── public                      # Static assets for the application
```

---

## Features

1. **CI/CD Pipeline**
   - Automated build, test, and deployment using Jenkins.
   - Quality gate check with SonarQube.
   - Dependency scanning with Trivy.

2. **Blue-Green Deployment**
   - Zero-downtime deployments.
   - Traffic switching between Blue and Green environments.

3. **Infrastructure as Code (IaC)**
   - Infrastructure provisioning using Terraform.

4. **Configuration Management**
    - Infrastructure setup and configuration using Ansible.
    - Automated installation and configuration of tools.
    - Idempotent and repeatable deployments.
    - Role-based configuration management.

5. **Artifact Management**
   - Artifacts published and stored in Nexus.

6. **Security Scanning**
   - File system and container image scanning using Trivy.

---

## Pipeline Overview

The Jenkins pipeline (defined in `Jenkinsfile`) consists of the following stages:

1. **Git Checkout**: Fetch the source code from the GitHub repository.
2. **Trivy FS Scan**: Perform file system vulnerability scanning.
3. **SonarQube Analysis**: Analyze code quality and maintainability.
4. **Quality Gate Check**: Ensure the code meets predefined quality standards.
5. **Install Dependencies**: Install npm dependencies.
6. **Build Next.js App**: Build the application for production.
7. **Setup .npmrc**: Configure npm with credentials.
8. **Publish Artifacts**: Publish build artifacts to Nexus.
9. **Docker Build & Push**: Build and push the Docker image to the registry.
10. **Trivy Image Scan**: Scan Docker images for vulnerabilities.
11. **Deploy SVC-APP**: Deploy the application to Kubernetes.

---

## Deployment

### Blue-Green Deployment

- **Blue Environment**: Defined in `app-deployment-blue.yml`.
- **Green Environment**: Defined in `app-deployment-green.yml`.
- Traffic can be switched between environments using the `SWITCH_TRAFFIC` parameter in the Jenkins pipeline.

### Kubernetes Configuration

Kubernetes configurations are stored in the `cluster_config` directory, including roles, role bindings, service accounts, and security settings.

---

## Prerequisites

- **Jenkins** with necessary plugins:
  - Pipeline
  - Blue Ocean
  - Kubernetes
  - SonarQube Scanner
- **Docker** installed and running.
- **Kubernetes Cluster** for deploying the application.
- **Terraform** for provisioning infrastructure.
- **Nexus** for artifact management.
- **SonarQube** for code quality checks.
- **Trivy** for vulnerability scanning.
- **Ansible** for configuration management.

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/PPT1001/Blue-Green-Deployment-Project.git
   cd Blue-Green-Deployment-Project
   ```

2. Configure Jenkins:
   - Import the `Jenkinsfile` into a new Jenkins pipeline.
   - Set up credentials for GitHub, Docker, Nexus, and SonarQube.

3. Set up Kubernetes:
   - Apply the configurations in `cluster_config`.

4. Deploy the Application:
   - Run the Jenkins pipeline with the desired `DEPLOY_ENV` and `DOCKER_TAG`.

---

## Tools & Technologies

- **Jenkins**: CI/CD automation.
- **Docker**: Containerization.
- **Kubernetes**: Container orchestration.
- **SonarQube**: Code quality analysis.
- **Trivy**: Security scanning.
- **Nexus**: Artifact repository.
- **Terraform**: Infrastructure as Code (IaC).
- **Ansible**: Configuration management.
- **Next.js**: Frontend framework.