import { Directive } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {
  
  constructor() { }

  ngAfterViewInit(){
    alert("hello")
  }

}
