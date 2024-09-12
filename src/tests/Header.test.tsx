import { mount } from '@cypress/react';
import Header from '../../src/components/Header';
import { useTranslation } from 'next-i18next';
import { jest } from '@jest/globals';

// Mock para o useTranslation
jest.mock('next-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Adicionando tipo explícito
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe('Header', () => {
  it('should render language buttons', () => {
    mount(<Header />);

    // Verifica se o título está presente
    cy.get('h1').should('exist').and('have.text', 'appTitle');
    
    // Verifica se o botão de inglês está presente e possui o ícone correto
    cy.get('button').contains('EN').should('exist');
    cy.get('img').should('have.attr', 'src', '/images/Flag_of_the_United_States.svg');
    
    // Verifica se o botão de português está presente e possui o ícone correto
    cy.get('button').contains('PT-BR').should('exist');
    cy.get('img').should('have.attr', 'src', '/images/Flag_of_Brazil.svg');
  });

  it('should change language on button click', () => {
    const { i18n } = useTranslation();

    mount(<Header />);

    // Simula o clique no botão de inglês
    cy.get('button').contains('EN').click();
    cy.wrap(i18n.changeLanguage).should('have.been.calledWith', 'en');
    
    // Simula o clique no botão de português
    cy.get('button').contains('PT-BR').click();
    cy.wrap(i18n.changeLanguage).should('have.been.calledWith', 'pt-BR');
  });
});