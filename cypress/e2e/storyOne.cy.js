import { forBeforeEach } from "../support/challenge/beforeEach"
import { forSaveProperty } from "../support/challenge/favouriteTest"
import { selectors } from "../support/challenge/selectors"

describe('As a user I want the ability to save properties I’m looking at so they can be reviewed at a later time.', () => {
  beforeEach(() => {
    forBeforeEach.visitMainPage()
  })

  it('Each property on the hub should have an easy Favorite on/off button indicating that this property has been saved.', { scrollBehavior: false }, () => {
    cy.get(selectors.propertyBox).each(($el) =>{
      cy.get(selectors.favIcon).should('be.visible')
    })
  })

  it('The hub should have an indicator on the number of properties selected as saved',{ scrollBehavior: false }, () => {
    forSaveProperty.saveThreeProperties(0,1,2)
    cy.get(selectors.favouriteTotalValue).should('have.text', '(3)')
     
//When the indicator is clicked the hub should only display saved properties
    cy.get(selectors.favouriteTotal).click()
    cy.get(selectors.favouritesPageToggleTrue).should('exist')
   
    cy.get(selectors.favIcon).then($el =>{
        let itemsSaved = 0 
        itemsSaved = $el.length;
        expect(itemsSaved).to.equal(3)
    })
//I can un-save property from the filtered view
    cy.get(selectors.favIcon).eq(0).click()
    cy.get(selectors.favIcon).then($el =>{
      let itemsSaved = 0 
      itemsSaved = $el.length;
      expect(itemsSaved).to.equal(2)
      cy.get(selectors.favouriteTotalValue).should('have.text', '(2)')
    
    })
  })
})
