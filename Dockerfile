# Use official lightweight Node.js image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy application source code
COPY . .

# Default environment variable for PORT
ENV PORT=3000

# Expose container port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
