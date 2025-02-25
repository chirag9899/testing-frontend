const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Set base URL
    viewportWidth: 1280, // Optional: Adjust viewport size
    viewportHeight: 720,
    video: false, // Disable video recording for faster tests
    retries: 2, // Optional: Retries failed tests twice
  },
});
