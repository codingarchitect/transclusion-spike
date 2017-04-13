import { TransclusionSpikePage } from './app.po';

describe('transclusion-spike App', () => {
  let page: TransclusionSpikePage;

  beforeEach(() => {
    page = new TransclusionSpikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
