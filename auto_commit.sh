#!/bin/bash

# ===== CONFIG =====
REPO_DIR="/home/tejsva/Desktop/coding/medimeet"
FILE_NAME="daily_update.txt"

# ===== GO TO REPO =====
cd "$REPO_DIR" || exit

# ===== UPDATE FILE =====
DATE=$(date "+%Y-%m-%d %H:%M:%S")
echo "Last update: $DATE" > $FILE_NAME

# ===== GIT OPERATIONS =====
git add .

git commit -m "Auto update: $DATE" || echo "Nothing to commit"

git pull --rebase origin main

git push origin main