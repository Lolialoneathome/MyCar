import { MyCarPage } from './app.po';

describe('my-car App', () => {
  let page: MyCarPage;

  beforeEach(() => {
    page = new MyCarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
