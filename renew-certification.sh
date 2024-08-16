#!/bin/bash

# Variables
NGINX_CERTS_DIR="./nginx/certs"
DOMAIN="veganguda.local"
CERT_EXPIRY_DAYS=365

# Check if the certificates directory exists
if [ ! -d "$NGINX_CERTS_DIR" ]; then
    echo "Certificates directory $NGINX_CERTS_DIR does not exist. Run setup-nginx.sh first."
    exit 1
fi

# Generate new self-signed SSL certificates
echo "Generating new self-signed SSL certificates..."
openssl req -x509 -nodes -days $CERT_EXPIRY_DAYS -newkey rsa:2048 -keyout $NGINX_CERTS_DIR/nginx.key -out $NGINX_CERTS_DIR/nginx.crt -subj "/CN=$DOMAIN"

# Update the Nginx Docker volume with the new certificates
echo "Updating Nginx Docker volume with new certificates..."
docker run --rm -v nginx-config:/etc/nginx/certs -v $NGINX_CERTS_DIR:/certs alpine sh -c "cp /certs/nginx.crt /etc/nginx/certs/nginx.crt && cp /certs/nginx.key /etc/nginx/certs/nginx.key"

echo "Certificates renewed and updated. Restart your Nginx container to apply the changes."
