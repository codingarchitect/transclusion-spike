import { Directive, Input, ContentChild, AfterContentInit } from '@angular/core';
import { MagTabContentDirective } from './mag-tab-content.directive';

@Directive({
  selector: 'mag-tab'
})
export class MagTabDirective implements AfterContentInit {

  constructor() { }

  @Input() title: string;

  @ContentChild(MagTabContentDirective) contentTemplate: MagTabContentDirective;

  ngAfterContentInit() { 
  }

}