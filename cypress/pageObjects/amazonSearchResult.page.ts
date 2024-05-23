class searchResult {

    get searchResults() {
        return cy.get('[data-component-type="s-search-result"]');
    }

    specificSearchResultBySequence(sequenceNumber :number) {
        return this.searchResults.eq(sequenceNumber);
    }

    getTitleOfSpecificResult(sequenceNumber :number) {
       return this.specificSearchResultBySequence(sequenceNumber).find('[data-cy="title-recipe"]');
    }
}

export default new searchResult();