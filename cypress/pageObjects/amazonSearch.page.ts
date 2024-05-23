class amazonSearch{

    amazonUrl = 'https://www.amazon.com/';

    get searchBar() {
        return cy.get('[name="field-keywords"]');
    }

    get searchButton() {
        return cy.get('[value="Go"]');
    }

    navigateToAmazonSearch () {
        cy.visit(this.amazonUrl);
        return this;
    }

    enterProductNameInSearchBar(productName:string) {
        this.searchBar.type(productName);
        return this;
    }

    clickOnSearchButton() {
        this.searchButton.click();
    }
}

export default new amazonSearch();