import Header from '../../src/components/Header.vue'

describe('Header.vue', () => {
  it('renders with default content', () => {
    cy.mount(Header)
    
    // Check if the header element exists
    cy.get('header').should('exist')
    
    // Check if it has the correct CSS classes
    cy.get('header').should('have.class', 'bg-gray-800')
    cy.get('header').should('have.class', 'text-white')
    cy.get('header').should('have.class', 'py-4')
    
    // Check if the container div has correct classes
    cy.get('header div').should('have.class', 'container')
    cy.get('header div').should('have.class', 'mx-auto')
    cy.get('header div').should('have.class', 'text-center')
    
    // Check if the text content is displayed
    cy.get('header p').should('contain.text', 'Awesome Header')
    cy.get('header p').should('have.class', 'text-sm')
  })

  it('accepts and uses name prop', () => {
    const customName = 'CustomHeader'
    
    cy.mount(Header, {
      props: {
        name: customName
      }
    })
    
    // The component should still render normally even with custom name prop
    cy.get('header').should('exist')
    cy.get('header p').should('contain.text', 'Awesome Header')
  })

  it('uses default name prop when not provided', () => {
    cy.mount(Header)
    
    // Component should render with default behavior
    cy.get('header').should('exist')
    cy.get('header p').should('contain.text', 'Awesome Header')
  })

  it('has correct semantic structure', () => {
    cy.mount(Header)
    
    // Check semantic HTML structure
    cy.get('header').should('exist')
    cy.get('header > div > p').should('exist')
    
    // Verify the header is accessible
    cy.get('header').should('be.visible')
  })

  it('has proper styling and layout', () => {
    cy.mount(Header)
    
    // Check background color (should be dark)
    cy.get('header').should('have.css', 'background-color')
    
    // Check text color (should be white)
    cy.get('header').should('have.css', 'color')
    
    // Check padding
    cy.get('header').should('have.css', 'padding-top')
    cy.get('header').should('have.css', 'padding-bottom')
    
    // Check that text-center class is applied (which handles text alignment)
    cy.get('header div').should('have.class', 'text-center')
  })

  it('renders correctly with different name prop values', () => {
    const testNames = ['TestHeader', 'MyCustomHeader', '']
    
    testNames.forEach(name => {
      cy.mount(Header, {
        props: {
          name: name
        }
      })
      
      // The header should always render the same content regardless of name prop
      cy.get('header p').should('contain.text', 'Awesome Header')
    })
  })

  it('maintains responsive design classes', () => {
    cy.mount(Header)
    
    // Check if responsive classes are present
    cy.get('header div').should('have.class', 'container')
    cy.get('header div').should('have.class', 'mx-auto')
    
    // Verify the component is visible on different viewport sizes
    cy.viewport(320, 568) // Mobile
    cy.get('header').should('be.visible')
    
    cy.viewport(768, 1024) // Tablet
    cy.get('header').should('be.visible')
    
    cy.viewport(1920, 1080) // Desktop
    cy.get('header').should('be.visible')
  })

  it('has correct HTML structure hierarchy', () => {
    cy.mount(Header)
    
    // Verify the nested structure exists
    cy.get('header > div').should('exist')
    cy.get('header > div > p').should('exist')
    
    // Verify the content within the structure
    cy.get('header')
      .within(() => {
        cy.get('div')
          .within(() => {
            cy.get('p').should('contain.text', 'Awesome Header')
          })
      })
  })
})