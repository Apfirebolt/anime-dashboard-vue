import { mount } from 'cypress/vue'
import Footer from '../../src/components/Footer.vue'

describe('Footer', () => {
  it('renders the text correctly', () => {
    mount(Footer).then(() => {
      // Assert the content of the p tag
      cy.get('p').should('contain.text', '2024 Jikan API. All rights reserved.') // Replace 'Footer Text' with your actual footer text
    })
  })
})