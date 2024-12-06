# Using NodeJS 23 Alpine Version
FROM node:23-alpine

# Define /app as Workdir
WORKDIR /app

# Copy Application File
COPY . .

# Installing dependencies
RUN npm install

# Expose to 3000
EXPOSE 3000

# Run Application
CMD ["node", "app.js"]