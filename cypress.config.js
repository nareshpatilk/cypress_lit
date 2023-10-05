const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://www.saucedemo.com/v1/index.html",
    testIsolation: false,
    video: true,
    videosFolder: 'cypress/videos'
  },
});
