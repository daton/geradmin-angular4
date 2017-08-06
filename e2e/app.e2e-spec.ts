import { GeradminAngular4Page } from './app.po';

describe('geradmin-angular4 App', () => {
  let page: GeradminAngular4Page;

  beforeEach(() => {
    page = new GeradminAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
