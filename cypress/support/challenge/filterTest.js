import { selectors } from "./selectors";

export class CheckMinimumValue {
    minimumBedroomValue(){
        cy.get(selectors.valueBedrooms).then(value => {
            let currentBedroomValue = value.text()
                if (currentBedroomValue == 0){
                    cy.get(selectors.minusBathroomBtn).click().should('be.disabled')
                } else{
                    cy.get(selectors.minusBathroomBtn).click().should('be.enabled')
                }
        })
    }
    minimumBathroomValue(){
        cy.get(selectors.valueBathrooms).then(value => {
            let currentBathroomValue = value.text()
                if (currentBathroomValue == 0)  {
                    cy.get(selectors.minusBathroomBtn).click().should('be.disabled')
                } else {
                    cy.get(selectors.minusBathroomBtn).click().should('be.enabled')
                }
        })
    }
}
export const forCheckMinimumValue = new CheckMinimumValue

export class IncreaseValue{
	increaseBedroomValue(){
		cy.get(selectors.plusBedroomBtn).click()
		cy.get(selectors.valueBedrooms).then(value => {
            let currentBedroomValue = value.text()
            expect(currentBedroomValue).eq("1")
	    })
    }   

	increaseBathroomValue(){
		cy.get(selectors.plusBathroomBtn).click()
		cy.get(selectors.valueBathrooms).then(value => {
            let currentBathroomValue = value.text()
            expect(currentBathroomValue).eq("1")
	    })
    }
}
export const forIncreaseValue = new IncreaseValue

export class ConfirmClearFilters{
	confirmBedroomValueZero(){
		cy.get(selectors.valueBedrooms).then(value => {
            let currentBedroomValue = value.text()
            expect(currentBedroomValue).eq("0")
	    })
    }

	confirmBathroomValueZero(){
		cy.get(selectors.valueBathrooms).then(value => {
            let currentBathroomValue = value.text()
            expect(currentBathroomValue).eq("0")
	    })
    }
}
export const forConfirmClearFilters = new ConfirmClearFilters


export class FilterResults {
    clickPlusBedroomValue(value){
        Cypress._.times(value, () => {
        cy.get(selectors.plusBedroomBtn).click()
        })
    }
    //extra one for filtering bathrooms
    clickPlusBathroomValue(value){
        Cypress._.times(value, () => {
        cy.get(selectors.plusBathroomBtn).click()
        })
    }
  }
  export const forFilterResults = new FilterResults