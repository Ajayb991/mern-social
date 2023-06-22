# Base image
FROM node:13.12.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your application listens on (assuming it's 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "development"]
