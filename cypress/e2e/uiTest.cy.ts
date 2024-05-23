import amazonSearch from "../pageObjects/amazonSearch.page";
import searchResult from "../pageObjects/amazonSearchResult.page";

describe('Assessment 1- UI Automation Test', () => {

  it('Search iPhone in Amazon.com', () => {

    amazonSearch.navigateToAmazonSearch()
                .enterProductNameInSearchBar('iphone')
                .clickOnSearchButton();

    searchResult.getTitleOfSpecificResult(0).should('contain.text', 'Apple iPhone');
  })
})