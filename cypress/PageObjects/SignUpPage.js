import LandingPage from './LandingPage'

const firstNameSelector = "#firstname";
const lastNameSelector = "#lastname";
const emailSelector = "#email";
const passwordSelector = "#password";


class SignUpPage {

    FillFormFields(BadEmail){
        const email = BadEmail === true ? "ThisIsABadEmail" : `JohnDoe${Math.random().toString(36).substring(6)}@gmail.com` ;

        cy.get(firstNameSelector).clear().type("John");
        cy.get(lastNameSelector).clear().type("Doe")
        cy.get(emailSelector).clear().type(email);
        cy.get(passwordSelector).clear().type("RandomPassword1234");
    }

    clickPrivacyInput() {
    cy.get('input[type="checkbox"]').click();
    }

    getRegisterElement(){
        return  cy.contains("Register");
    }

    clickLoginAsIndividual(){
        cy.contains("Join as an individual").click();
    }

    clickRegister(){
        this.getRegisterElement().click();

        const landingPage  = new LandingPage();
        return landingPage;
    }
}

export default SignUpPage;




