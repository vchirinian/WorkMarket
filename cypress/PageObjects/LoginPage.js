import HomePage from "./HomePage";

const emailSelector = "#login-email";
const passwordSelector = "#login-password";
const loginButtonSelector = "#login_page_button";

class LoginPage {

    loginToApp() {
        const homepage = new HomePage()
        cy.get(emailSelector).type("qa+candidatetest@workmarket.com");
        cy.get(passwordSelector).type("candidate123");
        cy.get(loginButtonSelector).click();
        return homepage
    }
}


export default LoginPage