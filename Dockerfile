# ==========================================
# Multi-Stage Dockerfile for College Exam Portal
# ==========================================

# Stage 1: Build the Vite React Application
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (utilizing docker layer caching)
COPY package*.json ./
RUN npm install

# Copy source code and build production bundle
COPY . .
RUN npm run build

# Stage 2: Serve Production Artifacts with Nginx
FROM nginx:alpine

# Copy built assets to Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration supporting SPA client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose internal container port 80
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
