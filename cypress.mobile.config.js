const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 375,
    viewportHeight: 667,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'
  }
}
)