import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Pipe utilizado para retonar uma url higienizada pelo angular. esta higienização serve para proteger
 * de Cross-site Scripting (XSS)
 */
@Pipe({
  name: 'sanitizerUrl',
})
export class SanitizerUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string | undefined) {
    if (url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      return '';
    }
  }
}
