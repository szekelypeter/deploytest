import { DeploytestPage } from './app.po';

describe('deploytest App', function() {
  let page: DeploytestPage;

  beforeEach(() => {
    page = new DeploytestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
