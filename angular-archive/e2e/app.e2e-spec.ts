import { AngularArchivePage } from './app.po';

describe('angular-archive App', () => {
  let page: AngularArchivePage;

  beforeEach(() => {
    page = new AngularArchivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
