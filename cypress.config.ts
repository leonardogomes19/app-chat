const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Certifique-se de que a URL da aplicação está correta
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', // Padrão de busca pelos arquivos de teste
    supportFile: false,
  },
});