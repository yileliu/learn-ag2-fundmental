import { LearnAg2FundmentalPage } from './app.po';

describe('learn-ag2-fundmental App', function() {
  let page: LearnAg2FundmentalPage;

  beforeEach(() => {
    page = new LearnAg2FundmentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
