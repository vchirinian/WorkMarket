const searchSelector = "#input-text";
const profilePhotoSelector =".profile-card";


class TalentSearchPage{

    getSearchResultsForCriteria(searchText){
        const selectorField = cy.get(searchSelector);
        selectorField.type(searchText);
        selectorField.type("{enter}");
    }

    validateSearchResults(searchText){
        cy.get(profilePhotoSelector).each(($profile, index, $list)=>{
            cy.wrap($profile).invoke('text').should('contain', searchText)
        })
    }
}


export default TalentSearchPage
