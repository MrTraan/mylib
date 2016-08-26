import { MyLibraryPage } from './app.po';

describe('my-library App', function() {
  let page: MyLibraryPage;

  beforeEach(() => {
    page = new MyLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
