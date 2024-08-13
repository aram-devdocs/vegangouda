# Welcome to Your NX Environment

This README provides a comprehensive guide on setting up, starting, and running your NX environment, including managing your Docker workflow for both local development and production deployments. Additionally, it includes a tutorial on creating new libraries or apps using NX.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the App](#running-the-app)
- [Docker Workflow Commands](#docker-workflow-commands)
  - [Building and Testing Locally](#1-building-and-testing-locally)
  - [Using Portainer for Docker Swarm Management](#2-using-portainer-for-docker-swarm-management)
  - [Deprecated: Manual Docker Swarm Commands](#3-deprecated-manual-docker-swarm-commands)
  - [Additional Commands](#additional-commands)
- [Troubleshooting Docker Swarm](#troubleshooting-docker-swarm)
- [Creating a New Library or App](#creating-a-new-library-or-app)
- [Available Scripts](#available-scripts)
- [Conclusion](#conclusion)

## Prerequisites

Before proceeding with the setup, ensure you have the following prerequisites installed on your system:

- Node.js (version >= 14.x)
- npm (version >= 7.x)
- Docker (for running the database and app services using Docker Compose)

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

### 3. Deprecated: Manual Docker Swarm Commands

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

### Additional Commands

- **Serve Storybook for the Web Component Library:**

```bash
npm run storybook
```

- **Generate TypeScript Types:**
```bash
npm run generate-types
```

## Troubleshooting Docker Swarm

Unable to access externally from the manager? You may need to recreate the ingress network: [Stack Overflow Link](https://stackoverflow.com/questions/59007780/container-running-on-docker-swarm-not-accessible-from-outside).

1. Remove services that publish ports.
2. Remove the existing network:
```bash
docker network rm ingress
```
3. Recreate using a non-conflicting subnet:
```bash
docker network create \
--driver overlay \
--ingress \
--subnet 172.16.0.0/16 \
--gateway 172.16.0.1 \
ingress
```
4. Restart services.

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
- `npm run start:portainer`: Deploys Portainer on Docker Swarm.
- `npm run stop:portainer`: Stops the Portainer stack.

## Conclusion

That's it! You should now have a fully functional NX environment along with a streamlined workflow for managing your Docker Swarm environment using Portainer. If you have any questions or issues, please refer to the NX documentation or reach out to me directly.
