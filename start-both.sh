#!/bin/bash

echo "Starting LearnFlow AI - Both Applications..."
echo ""
echo "Application A (LearnflowBarracks) will run on: http://localhost:8081"
echo "Application B (LearnFlow) will run on: http://localhost:8080"
echo ""
echo "Press Ctrl+C to stop both applications"
echo ""

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing root dependencies..."
    npm install
fi

if [ ! -d "A-main/A-main/node_modules" ]; then
    echo "Installing dependencies for Application A..."
    cd A-main/A-main
    npm install
    cd ../..
fi

if [ ! -d "B-main/B-main/node_modules" ]; then
    echo "Installing dependencies for Application B..."
    cd B-main/B-main
    npm install
    cd ../..
fi

echo "Starting both applications..."
npm run dev


