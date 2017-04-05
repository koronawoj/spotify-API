import { Training1Page } from './app.po';

describe('training1 App', () => {
  let page: Training1Page;

  beforeEach(() => {
    page = new Training1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
