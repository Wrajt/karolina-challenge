import { selectors } from "./selectors";


export class BeforeEach {
    visitMainPage(){
        cy.visit('https://www.rezfusionhubdemo.com/hub-test-vacation-rentals')
        cy.get(selectors.cookies).click()//accept cookies
        cy.get(selectors.map).click({scrollBehavior: false})//turns the map off for my own convinience
    }
}
export const forBeforeEach = new BeforeEach