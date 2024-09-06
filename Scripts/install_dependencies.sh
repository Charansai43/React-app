#!/bin/bash
echo "Installing server dependencies..."
# Ensure your server has Node.js and other necessary dependencies installed
cd /var/www/html
npm install --production  # Install only production dependencies
