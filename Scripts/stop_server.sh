#!/bin/bash
echo "Stopping existing server..."
sudo service nginx stop || true  # Stop Nginx (replace with your server)
