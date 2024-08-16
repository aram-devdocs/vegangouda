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
- [Prisma Setup, Usage, and Best Practices](#prisma-setup-usage-and-best-practices)
  - [Setting Up Prisma](#1-setting-up-prisma)
  - [Handling Model Changes and Migrations](#2-handling-model-changes-and-migrations)
  - [Using Prisma's Type Safety Features](#3-using-prismas-type-safety-features)
  - [Using Prisma Studio](#4-using-prisma-studio)
  - [Troubleshooting Prisma](#5-troubleshooting-prisma)
  - [Best Practices](#6-best-practices)
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

## Prisma Setup, Usage, and Best Practices

This section provides instructions on setting up and using Prisma in your project. Prisma is a next-generation ORM that provides a powerful and type-safe way to interact with your database.

### 1. Setting Up Prisma

To get started with Prisma in a new project and how we got set up here:

1. **Install Prisma**:
   If you haven't already installed Prisma, add it to your project:

```bash
npm install @prisma/client
npm install prisma --save-dev
```

2. **Initialize Prisma**:
   Initialize Prisma in your project. This will create a `prisma` directory with a `schema.prisma` file:

```bash
npx prisma init
```

    Update the `schema.prisma` file with your database configuration and models.

3. **Generate Prisma Client**:
   After configuring your models in `schema.prisma`, run the following command to generate the Prisma Client:

```bash
npm run prisma:generate
```

### 2. Handling Model Changes and Migrations

Prisma uses migrations to apply changes to your database schema.

1. **Creating a Migration**:
   When you make changes to your models in `schema.prisma`, create a migration:

```bash
npm run prisma:migrate:create-only
```

    This command creates a migration file without applying it. Review the generated migration before applying it to avoid unintended changes.

2. **Applying a Migration**:
   To apply the migration, use:

```bash
npm run prisma:migrate
```

    **Warning:** This can potentially drop columns or cause data loss. Ensure that you have reviewed the migration file before running this command.

3. **Introspecting an Existing Database**:
   If you are working with an existing database, you can introspect the current schema and update your `schema.prisma`:

```bash
npm run prisma:introspect
```

4. **Formatting Prisma Schema**:
   To keep your `schema.prisma` file clean and formatted, use:

```bash
npm run prisma:format
```

### 3. Using Prisma's Type Safety Features

Prisma provides strong type safety features that ensure your queries are correct at compile time.

1. **Type-Safe Queries**:
   When you use Prisma Client in your code, TypeScript provides autocomplete and type checking. This helps prevent common mistakes such as using incorrect field names or passing the wrong types.

   Example:

```typescript
const user = await prisma.user.findUnique({
  where: { id: 1 },
});
```

    Type safety ensures that if you try to access a field that doesn't exist, TypeScript will throw an error during compilation.

2. **Auto-Generated Types**:
   Prisma generates types based on your schema, which you can import and use throughout your application:

```typescript
import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();
```

    These types are automatically updated whenever you run `npm run prisma:generate`.

### 4. Using Prisma Studio

Prisma Studio is a visual editor for your database. It allows you to browse and edit data in your database directly from your browser.

1. **Starting Prisma Studio**:
   To start Prisma Studio, run:

```bash
npm run prisma:studio
```

    This will open Prisma Studio in your browser, where you can interact with your database records.

2. **Editing Data**:
   Prisma Studio provides an easy-to-use interface for editing records. Changes made through Prisma Studio are applied directly to your database.

### 5. Troubleshooting Prisma

Common issues you might encounter when using Prisma and how to resolve them:

1. **Database Connection Issues**:
   If Prisma can't connect to your database, ensure your database URL in `schema.prisma` is correct and that the database server is running.

2. **Migration Conflicts**:
   If you encounter conflicts when running migrations, review the migration file generated in the `prisma/migrations` directory. Ensure that changes are intentional and resolve any conflicts before applying the migration.

3. **Schema Validation Errors**:
   If you receive errors when running `prisma generate` or `prisma migrate`, check your `schema.prisma` file for syntax errors or invalid field definitions.

   You can format your schema to help identify and resolve these errors:

```bash
npm run prisma:format
```

4. **Outdated Prisma Client**:
   If your Prisma Client is outdated or doesn't reflect the latest schema changes, regenerate it:

```bash
npm run prisma:generate
```

### 6. Best Practices

- **Use Type Safety**: Always rely on Prisma's type safety features to catch errors at compile time.
- **Review Migrations**: Always review migration files before applying them to avoid data loss.
- **Keep Prisma Client Up-to-Date**: After any schema changes, run `npm run prisma:generate` to ensure your Prisma Client is up-to-date.
- **Regularly Back Up Your Database**: Before running migrations or making significant changes, ensure your database is backed up to prevent data loss.

- **\_Generate TypeScript Types:**

_Deprecated: The old version used Joi schemas to generate TypeScript types. The new version uses TypeORM entities to generate types. The command below is deprecated and should not be used. The new command is `npm run prisma:generate`._

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

# Nginx Configuration

This project sets up a Docker Swarm environment with Nginx as a reverse proxy, handling SSL termination for local development. The provided scripts assist in managing SSL certificates and updating configuration.

## Setup

### 1. Initial Setup

Before using the provided scripts, you need to set up Nginx and the Docker Compose configuration.

1. **Create Nginx Configuration and Certificates**

   Run the `setup-nginx.sh` script to create Nginx configuration and generate self-signed SSL certificates.

   ```bash
   ./setup-nginx.sh
   ```

2. **Update the Local Hosts File**

   Update your local `hosts` file to map the domain to your Docker Swarm manager's IP address.

   ```bash
   ./update-hosts.sh
   ```

3. **Deploy Docker Compose for Nginx**

   Deploy the `docker-compose.nginx.yml` file using Portainer or manually:

   ```bash
   docker-compose -f docker-compose.nginx.yml up -d
   ```

## Certificate Management

### Renewing Certificates

To renew the self-signed SSL certificates and update the Nginx configuration, use the `renew-certificate.sh` script:

1. **Run the Renewal Script**

   Execute the following command to generate new certificates and update the Docker volume:

   ```bash
   ./renew-certificate.sh
   ```

2. **Restart Nginx Container**

   After renewing the certificates, restart the Nginx container to apply the changes. You can do this through Portainer or using the Docker command:

   ```bash
   docker restart <nginx-container-name>
   ```

## Scripts

### `setup-nginx.sh`

Sets up the Nginx configuration and generates self-signed SSL certificates. The script does the following:

- Creates the necessary directories.
- Generates self-signed SSL certificates.
- Creates a Docker volume with the Nginx configuration.

### `update-hosts.sh`

Updates the local `hosts` file to map `veganguda.local` to the Docker Swarm manager's IP address. This allows you to access your services via the custom domain locally.

### `renew-certificate.sh`

Renews the self-signed SSL certificates and updates the Docker volume with the new certificates. This script:

- Generates new certificates.
- Updates the Docker volume with the new certificates.
- Notifies you to restart the Nginx container.

## Notes

- **Local Development Only:** This setup uses self-signed certificates suitable for local development. For production environments, use certificates from a trusted Certificate Authority.
- **Portainer Integration:** If using Portainer, deploy the `docker-compose.nginx.yml` file from the Portainer UI for easier management.
- **File Permissions:** Ensure all scripts have executable permissions. Use `chmod +x script_name.sh` to set permissions.

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
