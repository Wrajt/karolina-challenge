import { selectors } from "./selectors"


export class SaveProperty{
    saveOneProperty(value){
    cy.get(selectors.favIcon).eq(value).click()
    }

    saveThreeProperties(value1, value2, value3){
        cy.get(selectors.favIcon).eq(value1).click()
        cy.get(selectors.favIcon).eq(value2).click()
        cy.get(selectors.favIcon).eq(value3).click()
    }
}
export const forSaveProperty = new SaveProperty
