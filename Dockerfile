# Instruction to create the Docker Image
# alpine means add smaller version of the node image
FROM node:18-alpine

# please create the app directory/folder inside the container
WORKDIR /app

COPY ./package*.json ./

# Every Run command creates a layer
RUN npm install --save-dev

# copy all files from current directory in the conatiner app directory
COPY . .

