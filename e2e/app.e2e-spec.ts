import { TDDNgrxDevOpsPracticePage } from './app.po';

describe('tdd-ngrx-dev-ops-practice App', () => {
  let page: TDDNgrxDevOpsPracticePage;

  beforeEach(() => {
    page = new TDDNgrxDevOpsPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
