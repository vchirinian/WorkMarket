import LoginPage from '../PageObjects/LoginPage'
import HomePage from '../PageObjects/HomePage'

before(()=>{
    cy.visit("/login");
})

describe("Testing login page", ()=>{

    const loginPage =  new LoginPage();
    it("Logging in successfully", ()=>{
        const homePage = loginPage.loginToApp();
        homePage.getHomeContainer()
            cy.url().should('include','/home');
        }
    )
})
