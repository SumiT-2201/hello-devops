# Stage 1: Build the static React + Vite application
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies deterministically
RUN npm ci

# Copy source code
COPY . .

# Build production bundle (outputs to /app/dist)
RUN npm run build

# Stage 2: Serve application using Nginx
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose HTTP port 80
EXPOSE 80

# Start Nginx in foreground mode
CMD ["nginx", "-g", "daemon off;"]
