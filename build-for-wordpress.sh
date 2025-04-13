#!/bin/bash

# Build script for WordPress deployment

# Set the WordPress path (change this to your WordPress subdirectory)
WORDPRESS_PATH="/react-app"

# Update the env file with the correct path
echo "Configuring for WordPress deployment at path: $WORDPRESS_PATH"
echo "VITE_WORDPRESS_PATH=$WORDPRESS_PATH" > .env.production.local

# Update the vite.config.ts file
sed -i "s|const WORDPRESS_PATH = '.*';|const WORDPRESS_PATH = '$WORDPRESS_PATH';|" vite.config.ts

# Update the App.tsx file
sed -i "s|const BASE_PATH = '.*';|const BASE_PATH = '$WORDPRESS_PATH';|" src/App.tsx

# Build the application
echo "Building the React application..."
npm run build

# Create a zip file for easy uploading
echo "Creating zip archive..."
cd dist && zip -r ../wordpress-deploy.zip . && cd ..

echo "Build complete! Upload the contents of the 'dist' folder or the 'wordpress-deploy.zip' file to your WordPress hosting."
echo "Be sure to follow the instructions in the deployment-guide.md file for WordPress integration." 