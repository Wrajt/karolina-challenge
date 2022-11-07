const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '45pmw6',
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
  },
});
