# Welcome to Your NX Environment

This README provides a comprehensive guide on setting up, starting, and running your NX environment, including managing your Docker workflow for both local development and production deployments. Additionally, it includes a tutorial on creating new libraries or apps using NX.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the App](#running-the-app)
- [Docker Workflow Commands](#docker-workflow-commands)
  - [Building and Testing Locally](#1-building-and-testing-locally)
  - [Using Portainer for Docker Swarm Management](#2-using-portainer-for-docker-swarm-management)
  - [Configuring and Using a Private Docker Registry](#3-configuring-and-using-a-private-docker-registry)
  - [Deprecated: Manual Docker Swarm Commands](#4-deprecated-manual-docker-swarm-commands)
  - [Additional Commands](#5-additional-commands)
- [Troubleshooting Docker Swarm and Registry](#troubleshooting-docker-swarm-and-registry)
  - [Registry Issues](#registry-issues)
  - [Swarm Service Issues](#swarm-service-issues)
- [Creating a New Library or App](#creating-a-new-library-or-app)
- [Available Scripts](#available-scripts)
- [Conclusion](#conclusion)

## Prerequisites

Before proceeding with the setup, ensure you have the following prerequisites installed on your system:

- Node.js (version >= 14.x)
- npm (version >= 7.x)
- Docker (for running the database and app services using Docker Compose)
- Docker Desktop (if using macOS or Windows)
- Raspberry Pi setup for Docker Swarm (if applicable)

## Security Considerations

When working with Docker Swarm and a private Docker registry, it's essential to follow security best practices to protect your applications and data. Here are some key considerations:

- **Secure Your Docker Swarms and the Registry:**

  - Use strong passwords and secure your Docker Swarm manager nodes.
  - Restrict access to the Docker registry and ensure it is only accessible to authorized users.
  - Regularly update your Docker images and the underlying OS to patch security vulnerabilities.

- **Use Secure Communication Channels:**

  - Enable TLS encryption for communication between Docker Swarm nodes and the registry.
  - Use VPNs or secure tunnels to protect data in transit between nodes and the registry.

- **Monitor and Audit Access:**

  - Monitor access logs for the Docker registry and Swarm nodes.
  - Set up alerts for suspicious activity or unauthorized access attempts.

- **Implement Role-Based Access Control (RBAC):**

  - Use RBAC to control access to Docker Swarm services and the registry.
  - Limit privileges to only those necessary for users and services.

- **Regularly Backup Data:**
  - Back up your Docker Swarm services and the registry data to prevent data loss in case of a failure.

By following these security practices, you can help protect your Docker Swarm environment and the private Docker registry from potential threats and vulnerabilities.
**NOTE**: In its current setup, all of these services use HTTP. For production use, it is recommended to secure the communication channels using HTTPS and other security measures, if the devices are exposed to the internet. This current setup is applied on a local network for development purposes, and security measures are not enforced. Because of this, you may run into issues with insecure registries, or devices not connecting. Troubleshooting these issues is beyond the scope of this document, but you can find more information on securing Docker Swarm and the Docker registry in the official Docker documentation. Bugs found during development will be documented in the [Troubleshooting Docker Swarm and Registry](#troubleshooting-docker-swarm-and-registry) section.

## Setup

1. Clone the repository to your local machine.
2. Navigate to the root of the cloned project.
3. Run the following command to install the project dependencies:

```bash
npm install
```

4. Configure the environment variables:

- Create a `.env` file in the root of the project.
- Add the following environment variables to the `.env` file:

```plaintext
POSTGRES_DB=vegangoudadb
POSTGRES_USER=testuser
POSTGRES_PASSWORD=testpassword
SALT_KEY=10
```

5. Start the database with the following command:

```bash
npm run database
```

## Running the App

To start the app for development, run:

```bash
npm start
```

This will run the `serve` target for the `web` and `api` projects in parallel, enabling hot-reloading and other development features.

To run Storybook, execute:

```bash
npm run storybook
```

## Docker Workflow Commands

This section details the various commands available for building, testing, and deploying your application using Docker and Docker Compose.

### 1. Building and Testing Locally

For local development, you can build and run your application with hot-reloading enabled.

- **Build Docker Images for Local Development:**

```bash
npm run build
```

- **Start Containers for Local Development:**

```bash
npm run start
```

- **Rebuild and Start Containers for Local Development:**

```bash
npm run rebuild
```

### 2. Using Portainer for Docker Swarm Management

Instead of manually managing your Docker Swarm setup via the command line, we recommend using [Portainer](https://www.portainer.io/) for a more streamlined and user-friendly experience. Portainer provides a powerful UI to manage your Docker Swarm clusters.

#### Setting Up Portainer

1. **Deploy Portainer on your Docker Swarm:**

   Run the following command to deploy Portainer as a stack on your Swarm:

```bash
npm run start:portainer
```

2. **Access the Portainer UI:**

   Once deployed, you can access the Portainer UI by navigating to `http://<manager-node-ip>:9000` in your web browser. Set up your admin user and password.

3. **Deploy Your Application Stack via Portainer:**

   - Log in to the Portainer UI.
   - Go to **Stacks** and select **Add Stack**.
   - Upload your `docker-compose.base.yml` (and any environment-specific compose files) to create and manage your application stack.
   - Configure the stack as needed and deploy it.

#### Updating and Managing Your Services

- **Service Updates:** Use the Portainer UI to update services, scale replicas, and manage rollouts.
- **Monitoring:** Portainer provides built-in monitoring tools to view logs, service status, and resource usage.

### 3. Configuring and Using a Private Docker Registry

In this project, a private Docker registry is used to manage Docker images for deployment. Below are the steps to configure and use the registry.

#### Setting Up the Docker Registry

1. **Deploy the Registry Alongside Portainer:**

   The Docker registry is included in the `docker-compose.portainer.yml` file. Deploy it alongside Portainer using:

```bash
npm run start:portainer
```

2. **Configure Docker to Use the Registry:**

   If you are using macOS or Windows with Docker Desktop:

   - **Via Docker Desktop:**

     - Go to **Docker Desktop > Preferences > Docker Engine**.
     - Add your registry IP (`{REGISTRY_IP}:5000`) to the `insecure-registries` section:

```json
{
  "insecure-registries": ["{REGISTRY_IP}:5000"]
}
```

     - Save and restart Docker Desktop.

If you are using Raspberry Pi nodes or Linux:

- **Via CLI:**

  - SSH into each Raspberry Pi node and edit the `daemon.json` file:

```bash
sudo nano /etc/docker/daemon.json
```

- Add the following configuration:

```json
{
  "insecure-registries": ["{REGISTRY_ID}:5000"]
}
```

- Restart Docker:

```bash
sudo systemctl restart docker
```

3. **Build and Push Images to the Registry:**

   Use the provided shell script to build and push your Docker images:

```bash
npm run build:all:push
```

    This command will build your Docker images and push them to the private registry.

4. **Verify the Images in the Registry:**

   After pushing, you can verify that the images are in the registry:

```bash
curl {REGISTRY_IP}/v2/_catalog
```

    This should list your repositories (e.g., `vegangouda-api`, `vegangouda-web`).

5. **Deploy the Services Using the Registry Images:**

   Ensure your `docker-compose.base.yml` uses the `${REGISTRY_IP_W_PORT}` variable for image paths, so that services pull the images from the correct registry.

#### Debugging Steps for the Docker Registry

- **If Images Aren't Pushed:**

  - Ensure Docker is configured to use the registry as an insecure registry.
  - Check for errors during the build and push process.
  - Verify the registry logs using `docker logs <registry-container-id>`.

- **If the Registry is Not Listing Repositories:**

  - Ensure the registry container has write access to the data directory.
  - Verify the configuration in `docker-compose.portainer.yml`.
  - Check the registry's data directory on the manager node.

- **If Nodes Cannot Pull Images:**
  - Ensure all Swarm nodes are configured to recognize the registry as insecure.
  - Verify the node configuration by running `docker info | grep -i insecure` on each node.

### 4. Deprecated: Manual Docker Swarm Commands

The following commands are now deprecated in favor of using Portainer for managing Docker Swarm. These commands are provided here for reference but should not be used.

- **Deprecated: Deploy the Application Stack to Local Swarm:**

```bash
npm run start:swarm
```

    _(Deprecated: Use Portainer to deploy stacks. Original command: `docker stack rm vegangouda && docker network prune -f && NODE_ENV=production API_REPLICAS=1 API_PARALLELISM=1 WEB_REPLICAS=1 WEB_PARALLELISM=1 DB_REPLICAS=1 DB_PARALLELISM=1 docker stack deploy -c docker-compose.base.yml vegangouda`)_

- **Deprecated: Stop the Swarm Stack:**

```bash
npm run stop:swarm
```

    _(Deprecated: Use Portainer to manage stacks. Original command: `docker stack rm vegangouda`)_

- **Deprecated: Update the Application Stack:**

```bash
npm run update:swarm
```

    _(Deprecated: Use Portainer to update services. Original commands: `npm run update:swarm:api && npm run update:swarm:web && npm run update:swarm:db`)_

### 5. Additional Commands

- **Serve Storybook for the Web Component Library:**

```bash
npm run storybook
```

- **Generate TypeScript Types:**

```bash
npm run generate-types
```

## Troubleshooting Docker Swarm and Registry

This section provides troubleshooting tips and common issues you might encounter when working with Docker Swarm and your private Docker registry.

### Registry Issues

- **Registry Not Accessible**:
  - Ensure that the registry container is running and properly configured to expose port 5000.
  - Verify that your registry is reachable from other nodes using `curl`:

```bash
curl {REGISTRY_IP}/v2/_catalog
```

- **Unable to Push Images to Registry**:
  - Ensure your local Docker daemon is configured to recognize the registry as insecure.
  - Check the Docker logs on your local machine and on the registry server for any errors.

### Swarm Service Issues

- **Service Fails to Start**:
  - Inspect the service with:

```bash
docker service inspect <service_name> --pretty
```

- Check the status of the tasks with:

```bash
docker service ps <service_name>
```

- View logs for a specific task with:

```bash
docker logs <task_id>
```

- **Service Stuck in Paused State**:
  - This usually indicates a failure or early termination of a task.
  - Force a service update to retry the deployment:

```bash
docker service update --force <service_name>
```

- **Image Pull Errors**:
  - Ensure the image name is correctly formatted with the registry IP and port.
  - Verify that all nodes are configured to allow insecure registries.
  - Manually pull the image on a node to check if it works:

```bash
docker pull {REGISTRY_IP}:5000/vegangouda-api:latest
```

- **Port Conflicts**:
  - Ensure that the ports specified in your `docker-compose` files are not already in use by another service on the node.

## Creating a New Library or App

To create a new library, run:

```bash
nx generate @nrwl/workspace:library <library-name>
```

This will create a new library in the `libs` directory.

To create a new app, run:

```bash
nx generate @nrwl/angular:app <app-name>
```

This will create a new app in the `apps` directory.

## Available Scripts

- `npm start`: Runs the `serve` target for the `web` and `api` projects in parallel with hot-reloading enabled.
- `npm run storybook`: Runs Storybook for the `web` project.
- `npm run database`: Starts the PostgreSQL database using Docker.
- `npm run generate-types`: Generates TypeScript types for the PostgreSQL schema.
- `npm run build:all:push`: Builds and pushes Docker images to the private registry.
- `npm run start:portainer`: Deploys Portainer on Docker Swarm.
- `npm run stop:portainer`: Stops the Portainer stack.

## Conclusion

That's it! You should now have a fully functional NX environment along with a streamlined workflow for managing your Docker Swarm environment using Portainer and a private Docker registry. If you have any questions or issues, please refer to the NX documentation or reach out to me directly.
