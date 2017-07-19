import { SassApp1Page } from './app.po';

describe('sass-app1 App', () => {
  let page: SassApp1Page;

  beforeEach(() => {
    page = new SassApp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
