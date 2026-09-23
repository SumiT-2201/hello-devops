const express = require('express');

// Initialize the Express application
const app = express();

// Read port from environment variable, fallback to 3000 if not set
const PORT = process.env.PORT || 3000;

// Root endpoint - returns application message and version
app.get('/', (req, res) => {
  res.json({
    message: "Hello from my deployed application!",
    version: "1.0.0"
  });
});

// Health check endpoint - used by Docker/Kubernetes to check if app is running
app.get('/health', (req, res) => {
  res.json({
    status: "healthy"
  });
});

// Start listening for incoming HTTP requests
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown handling
// Ensures existing requests complete before shutting down when process receives SIGINT or SIGTERM signals
const gracefulShutdown = (signal) => {
  console.log(`Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log('HTTP server closed. Exiting process.');
    process.exit(0);
  });
};

// Listen for termination signals (e.g. from Docker or Kubernetes)
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
