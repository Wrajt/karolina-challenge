import { forBeforeEach } from "../support/challenge/beforeEach"
import { forConfirmClearFilters, forIncreaseValue, forCheckMinimumValue, forFilterResults } from "../support/challenge/filterTest"
import { selectors } from "../support/challenge/selectors"

describe('As a user I want the ability to filter properties based on the number of bedrooms and bathrooms.', () => {
    beforeEach(() => {
      forBeforeEach.visitMainPage()
    })

    it('The Filters selection should allow the user to select the number of either bedrooms and/or bathrooms.',{ scrollBehavior: false }, () =>{
      cy.get(selectors.filterButton).click()
      cy.get(selectors.minimumBedrooms).should('be.visible').and('have.text', 'Minimum Bedrooms');
      cy.get(selectors.minumumBathrooms).should('be.visible').and('have.text', 'Minimum Bathrooms');
        // The selection should limit the value to an integer with a lower value of 0 (zero).
        forCheckMinimumValue.minimumBedroomValue()
        forCheckMinimumValue.minimumBathroomValue()
    })
    
    it('The Clear Filters button should reset both filters to their lower value.', {scrollBehavior: false}, () =>{
      cy.get(selectors.filterButton).click()
        forIncreaseValue.increaseBedroomValue()
        forIncreaseValue.increaseBathroomValue() 

      cy.get(selectors.clearFilters).click()             
        forConfirmClearFilters.confirmBedroomValueZero()
        forConfirmClearFilters.confirmBathroomValueZero()
        
    })
        
    it('The View Results button should close the Filter Results page and display properties on the hub meeting the criteria.', {scrollBehavior: false}, () =>{
      cy.get(selectors.filterButton).click()
        forFilterResults.clickPlusBedroomValue(4)
      cy.get(selectors.viewResults).click()
      cy.get(selectors.filterOptionsWindow).should('not.exist')

      cy.get(selectors.propertyBox).each(($element) =>{
      cy.get(selectors.propertyInfo).then((info)=>{
        const propertyInfo = info.text()
         
        const bedsAmmount = [
          "Beds: 1|",
          "Beds: 2|",
          "Beds: 3|",
        ];
        bedsAmmount.forEach(element =>
          expect(propertyInfo).not.to.contain(element))
      })
      })
    }) 
})
       