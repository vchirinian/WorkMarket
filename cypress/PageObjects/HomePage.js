const findTalentSelector = "#Talent-button"
const homeContainerSelector = "#home__container"

class HomePage {

    clickFindTalent(){
        cy.visit("/search?ref=boxsearch&keyword=");
    }

    getHomeContainer(){
        cy.get(homeContainerSelector);
    }
}

export default HomePage


