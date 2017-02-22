import { WeDesignerPage } from './app.po';

describe('we-designer App', function() {
  let page: WeDesignerPage;

  beforeEach(() => {
    page = new WeDesignerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
