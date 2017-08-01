import { TestBuildProdPage } from './app.po';

describe('test-build-prod App', () => {
  let page: TestBuildProdPage;

  beforeEach(() => {
    page = new TestBuildProdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
