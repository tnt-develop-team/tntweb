import { TntwebPage } from './app.po';

describe('tntweb App', () => {
  let page: TntwebPage;

  beforeEach(() => {
    page = new TntwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
