import { mount } from '@cypress/react';
import MessageInput from '../../src/components/MessageInput';

describe('MessageInput', () => {
  it('should send a message when clicking the send button', () => {
    const onSendMock = cy.stub().as('onSendMock');
    const onToggleDarkModeMock = cy.stub().as('onToggleDarkModeMock');
    
    mount(<MessageInput onSend={onSendMock} onToggleDarkMode={onToggleDarkModeMock} darkMode={false} />);
    
    // Simula o preenchimento do campo de input
    cy.get('input').type('Test message');
    
    // Simula o clique no botão de envio
    cy.get('button').contains('Enviar').click();
    
    // Verifica se a função de envio foi chamada com a mensagem correta
    cy.get('@onSendMock').should('have.been.calledWith', 'Test message');
  });
});