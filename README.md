# Welcome to Your NX Environment

This Readme provides a comprehensive guide on setting up, starting, and running your NX environment. Additionally, it includes a tutorial on creating a new library or app using NX.

## Table of Contents

## Prerequisites

Before proceeding with the setup, ensure you have the following prerequisites installed on your system:

- Node.js (version >= 14.x)
- npm (version >= 7.x)
- Docker (for running the database using docker-compose)

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

5. Start the database with `npm run database`

## Running the App

To start the app, run `npm start`. This will run the `serve` target for the `web` and `api` projects in parallel.

To run Storybook, run `npm run storybook`.

## Creating a New Library or App

To create a new library, run `nx generate @nrwl/workspace:library <library-name>`. This will create a new library in the `libs` directory.

To create a new app, run `nx generate @nrwl/angular:app <app-name>`. This will create a new app in the `apps` directory.

## Available Scripts

- `npm start`: Runs the `serve` target for the `web` and `api` projects in parallel.
- `npm run storybook`: Runs Storybook for the `web` project.
- `npm run database`: Starts the PostgreSQL database.
- `npm run generate-types`: Generates TypeScript types for the postgres schema.

## Conclusion

That's it! You should now have a fully functional NX environment. If you have any questions or issues, please refer to the NX documentation or reach out to me directly.
