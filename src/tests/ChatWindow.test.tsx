import { mount } from '@cypress/react';
import ChatWindow from '../../src/components/ChatWindow';

const messages = [
  { text: 'Hello', id: 1, sending: false, sentByUser: true },
  { text: 'Hi', id: 2, sending: false, sentByUser: false },
];

describe('ChatWindow', () => {
  it('should render messages correctly', () => {
    mount(<ChatWindow messages={messages} setMessages={() => {}} />);
    
    // Verificar se a mensagem enviada pelo usuário está presente
    cy.get('.message').first().should('have.text', 'Hello');
    
    // Verificar se a mensagem recebida está presente
    cy.get('.message').last().should('have.text', 'Hi');
  });
});