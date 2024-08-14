#!/bin/sh

# Load environment variables from .env file
export $(grep -v '^#' .env | xargs)

# Install pg_isready if it's not already installed
# TODO: This is not staying installed after the container is stopped, and when moved to the docker file it is not accessible here. Need to find a way to install it in the container to reduce load time.
if
  ! command -v pg_isready &
  >/dev/null
then
  echo "pg_isready is not installed. Installing..."
  apt-get update && apt-get install -y postgresql-client
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "DATABASE_URL is not set. Skipping Prisma migration."
else
  # Wait until PostgreSQL is available using pg_isready
  echo "Waiting for PostgreSQL to be available..."

  until pg_isready -h "$POSTGRES_HOST" -p "$POSTGRES_PORT" -U "$POSTGRES_USER"; do
    echo "Waiting for PostgreSQL..."
    sleep 5
  done

  echo "PostgreSQL is available. Running Prisma migration..."
  npm run prisma:docker
fi

# Start the Fastify app
exec "$@"
