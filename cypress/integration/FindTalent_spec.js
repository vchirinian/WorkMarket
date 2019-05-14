import LoginPage from '../PageObjects/LoginPage'
import TalentSearchPage from '../PageObjects/TalentSearchPage'

before(()=>{
    cy.visit("/login");
})

describe("Test Finding Specific Contractor", ()=>{
    it("Should navigate to Find ...", ()=>{
            let loginPage = new LoginPage();
            let homePage = loginPage.loginToApp();
            homePage.clickFindTalent();
            loginPage.loginToApp();
    }
    );

    it("All search results should contain test",()=>{
        const findTalentPage = new TalentSearchPage();
        const searchCriteria = "test"
        findTalentPage.getSearchResultsForCriteria(searchCriteria);
        findTalentPage.validateSearchResults(searchCriteria);
    });
});
