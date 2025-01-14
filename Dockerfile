# Use Node.js 21 as the base image
FROM node:21

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy only the necessary application files
COPY src ./src
COPY tsconfig.json ./

# Copy the .env file into the container
COPY .env .env


# Build the TypeScript files
RUN npm run build

# Expose the application port (e.g., 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
