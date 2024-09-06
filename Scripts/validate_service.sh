#!/bin/bash
echo "Validating service..."
curl -I http://localhost  # Check if the app is running on localhost (or other port)
