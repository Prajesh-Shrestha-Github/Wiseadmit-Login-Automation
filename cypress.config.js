const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.wiseadmit.io',
    defaultCommandTimeout: 10000,
  },
});