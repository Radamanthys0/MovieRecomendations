import { TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { SanitizerUrlPipe } from './sanitizer-url.pipe';

describe('SanitizerUrlPipe', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [BrowserModule],
      });
  });


  it('create an instance', () => {
    const domSanitizer = TestBed.get(DomSanitizer);
    const pipe = new SanitizerUrlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
