import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizerUrlPipe } from './sanitizer-url.pipe';



@NgModule({
  declarations: [SanitizerUrlPipe],
  providers: [SanitizerUrlPipe],
  exports: [SanitizerUrlPipe],
  imports: [
    CommonModule
  ]
})
export class SanitizerUrlModule { }
