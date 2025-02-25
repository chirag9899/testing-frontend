// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "http://localhost:3000", 
//     viewportWidth: 1280,
//     viewportHeight: 720,
//     video: false,
//     retries: 2,
//     reporterOptions: {
//       dashboardUrl: "http://localhost:8080",
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Your Next.js app
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    retries: 2,
    reporter: "mocha", // Use Mocha for Sorry Cypress
    reporterOptions: {
      dashboardUrl: "https://active-fred-hybrid-aspects.trycloudflare.com", 
    },
    projectId: "chirag0264"
  },
});
