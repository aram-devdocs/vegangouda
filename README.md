# Welcome to Your NX Environment

This README provides a comprehensive guide on setting up, starting, and running your NX environment, including managing your Docker workflow for both local development and production deployments. Additionally, it includes a tutorial on creating new libraries or apps using NX.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the App](#running-the-app)
- [Docker Workflow Commands](#docker-workflow-commands)
   - [Building and Testing Locally](#1-building-and-testing-locally)
   - [Building and Testing Locally with a Swarm](#2-building-and-testing-locally-with-a-swarm)
   - [Building and Deploying to a Production Single Instance](#3-building-and-deploying-to-a-production-single-instance)
   - [Building and Deploying to a Production Swarm](#4-building-and-deploying-to-a-production-swarm)
   - [Additional Commands](#additional-commands)
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

### 2. Building and Testing Locally with a Swarm

To simulate a production-like environment using Docker Swarm locally:

- **Build Docker Images for Local Swarm Testing:**
   ```bash
   npm run build
   ```

- **Deploy the Application Stack to Local Swarm:**
   ```bash
   npm run start:swarm
   ```

### 3. Building and Deploying to a Production Single Instance

For deploying to a single production server:

- **Deploy the Application Stack to a Production Swarm:**
   ```bash
   npm run deploy:swarm
   ```

- **Stop the Swarm Stack:**
   ```bash
   npm run stop:swarm
   ```

### Additional Commands

- **Serve Storybook for the Web Component Library:**
   ```bash
   npm run storybook
   ```

- **Generate TypeScript Types:**
   ```bash
   npm run generate-types
   ```

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

## Conclusion

That's it! You should now have a fully functional NX environment along with a comprehensive set of Docker commands to manage your development and production workflows. If you have any questions or issues, please refer to the NX documentation or reach out to me directly.