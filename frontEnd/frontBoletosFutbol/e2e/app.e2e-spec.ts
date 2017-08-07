import { FrontBoletosFutbolPage } from './app.po';

describe('front-boletos-futbol App', () => {
  let page: FrontBoletosFutbolPage;

  beforeEach(() => {
    page = new FrontBoletosFutbolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
