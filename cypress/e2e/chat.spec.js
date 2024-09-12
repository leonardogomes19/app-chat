describe('Chat Application', () => {
    it('should allow the user to send and receive messages', () => {
      // Acesse a página principal do chat
      cy.visit('/');
  
      // Digitar uma mensagem no input
      cy.get('input[placeholder="Digite sua mensagem..."]').type('Hello, bot!');
  
      // Clicar no botão de enviar
      cy.contains('Enviar').click();
  
      // Verificar se a mensagem do usuário apareceu no chat
      cy.contains('Hello, bot!').should('be.visible');
  
      // Verificar se a resposta do bot apareceu no chat
      cy.contains('How can I assist you today?').should('be.visible');
    });
  });