import SignUpPage from '../PageObjects/SignUpPage'

const SuPage = new SignUpPage();

before(()=>{
    cy.visit("/register/campaign/10081C503B209A0C8E7F05FDCC1AA98D4C904DEEF5F73265CAE38C744E7EAD3E");
    SuPage.clickLoginAsIndividual();
})

describe("Sign Up Page Form Validations", ()=>{
    it("Register button should not be enabled when provided no text", ()=>{
        SuPage.getRegisterElement().should("be.disabled");
    })

    it("Should not register without checking privacy box", ()=>{
        SuPage.FillFormFields(false);
        SuPage.getRegisterElement().should("be.disabled");
    })

    it("Correct emails are required to sign up", ()=>{
        SuPage.FillFormFields(true);
        cy.contains("Please enter a valid  email");
    })
})

describe("Valid registration Flow ", ()=>{

    it("Should register successfully",()=>{
        SuPage.FillFormFields(false);
        SuPage.clickPrivacyInput();

        const landingPage = SuPage.clickRegister();
        landingPage.onLandingPage();
    })
})





