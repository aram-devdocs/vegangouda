#!/bin/bash

# Load environment variables from .env.local
export $(grep -v '^#' .env.local | xargs)

# Ensure REGISTRY_IP is set
if [ -z "$REGISTRY_IP" ]; then
  echo "Error: REGISTRY_IP is not set. Please check your .env.local file."
  exit 1
fi

# Build the API Docker image
echo "Building API Docker image..."
docker build -t $REGISTRY_IP:5000/vegangouda-api:latest -f Dockerfile.api .

# Build the Web Docker image
echo "Building Web Docker image..."
docker build -t $REGISTRY_IP:5000/vegangouda-web:latest -f Dockerfile.web .

# Push the API Docker image to the registry
echo "Pushing API Docker image to registry..."
docker push $REGISTRY_IP:5000/vegangouda-api:latest

# Push the Web Docker image to the registry
echo "Pushing Web Docker image to registry..."
docker push $REGISTRY_IP:5000/vegangouda-web:latest

echo "Build and push complete!"