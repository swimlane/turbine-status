# Dockerfile for Angular Application

# Stage 1: Build the application
FROM node:22 AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install -g @angular/cli
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build

# Stage 2: Serve the application
FROM node:22 AS serve

# Set working directory
WORKDIR /usr/src/app

# Install production dependencies only
COPY package.json package-lock.json ./

RUN npm install -g @angular/cli
RUN npm install --production

# Copy built files from the build stage
COPY --from=build /usr/src/app/dist /usr/src/app/dist

# Expose application port
EXPOSE 4000

# Start the application
CMD ["npm", "run", "serve:ssr:turbine-status"]
