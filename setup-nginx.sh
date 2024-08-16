#!/bin/bash

# Variables
NGINX_CONF="server {
    listen 80;
    server_name veganguda.local;

    # Redirect HTTP to HTTPS
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    server_name veganguda.local;

    # SSL Configuration
    ssl_certificate /etc/nginx/certs/nginx.crt;
    ssl_certificate_key /etc/nginx/certs/nginx.key;

    location / {
        proxy_pass http://web:80;  # Forward requests to your web service
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}"
NGINX_CONF_DIR="./nginx"

# Create necessary directories
mkdir -p $NGINX_CONF_DIR/certs

# Generate self-signed SSL certificates (for local testing)
echo "Generating self-signed SSL certificates..."
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout $NGINX_CONF_DIR/certs/nginx.key -out $NGINX_CONF_DIR/certs/nginx.crt -subj "/CN=veganguda.local"

# Create a Docker volume to store the Nginx config
docker volume create nginx-config

# Create the Nginx configuration in the Docker volume
docker run --rm -v nginx-config:/etc/nginx/conf.d alpine sh -c "echo '$NGINX_CONF' > /etc/nginx/conf.d/default.conf"

echo "Nginx setup complete. Please deploy the docker-compose.nginx.yml using Portainer."
