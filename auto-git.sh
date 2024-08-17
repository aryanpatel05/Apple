#!/bin/bash

# Define the directory to watch
WATCHED_DIR="/Users/aryanpatel/Desktop/React-Apple-master"

# Navigate to the watched directory
cd $WATCHED_DIR

# Start an infinite loop to monitor changes
fswatch -o $WATCHED_DIR | while read change; do
    # Add all changes
    git add .

    # Commit changes with a generic message
    git commit -m "Auto-commit: changes detected"

    # Push changes to the remote repository
    git push origin main
done

