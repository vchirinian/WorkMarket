const registrationLandingSelector = '.registration-landing'
const landingPageParentSelector = '#campaign_landing'

class LandingPage {

    getLandingPageContainer(){
     return cy.get(landingPageParentSelector)
    }

    onLandingPage(){
        cy.get(registrationLandingSelector);
        cy.get(landingPageParentSelector);
    }
}

export default LandingPage;