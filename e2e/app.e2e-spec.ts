import { BeerFrontEndPage } from './app.po';

describe('beer-front-end App', () => {
  let page: BeerFrontEndPage;

  beforeEach(() => {
    page = new BeerFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
