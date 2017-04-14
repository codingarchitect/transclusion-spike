import { Directive, TemplateRef, ContentChild } from '@angular/core';

@Directive({
  selector: '[mag-tab-content]'
})
export class MagTabContentDirective {

  constructor(public templateRef: TemplateRef<any>) {}

}