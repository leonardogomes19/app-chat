import { mount } from '@cypress/react';
import AnimationComponent from '../../src/components/AnimationComponent';

describe('AnimationComponent', () => {
  it('should render correctly', () => {
    mount(<AnimationComponent />);
    cy.get('div').should('exist'); // Supondo que o componente renderiza uma <div>
  });
});