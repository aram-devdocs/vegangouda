#!/bin/bash

# Variables
NODE_SWARM_MANAGER_IP="{NODE_SWARM_MANAGER_IP}"
DOMAIN="veganguda.local"

# Determine the OS
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    HOSTS_FILE="/etc/hosts"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    HOSTS_FILE="/etc/hosts"
elif [[ "$OSTYPE" == "msys" ]]; then
    HOSTS_FILE="/c/Windows/System32/drivers/etc/hosts"
else
    echo "Unsupported OS"
    exit 1
fi

# Backup current hosts file
sudo cp $HOSTS_FILE ${HOSTS_FILE}.bak

# Update hosts file
if grep -q "$DOMAIN" $HOSTS_FILE; then
    echo "$DOMAIN already exists in $HOSTS_FILE"
else
    echo "$NODE_SWARM_MANAGER_IP $DOMAIN" | sudo tee -a $HOSTS_FILE
    echo "Updated $HOSTS_FILE with $DOMAIN"
fi
