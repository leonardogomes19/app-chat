import { mount } from '@cypress/react';
import DarkModeToggle from '../../src/components/DarkModeToggle';

describe('DarkModeToggle', () => {
  it('should toggle dark mode on click', () => {
    const onToggleMock = cy.stub().as('onToggleMock');
    
    mount(<DarkModeToggle onToggle={onToggleMock} darkMode={false} />);
    
    // Verifica se o botão está visível
    cy.get('button').should('exist');
    
    // Simula o clique no botão
    cy.get('button').click();
    
    // Verifica se a função de alternância foi chamada
    cy.get('@onToggleMock').should('have.been.calledOnce');
  });
});