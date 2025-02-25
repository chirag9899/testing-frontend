const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", 
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    retries: 2,
    reporter: "cypress-cloud",
    reporterOptions: {
      dashboardUrl: "http://localhost:8080",
    },
  },
});
