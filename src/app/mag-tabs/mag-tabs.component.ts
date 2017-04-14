import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { MagTabDirective } from '../mag-tab/mag-tab.directive';

@Component({
  selector: 'mag-tabs',
  templateUrl: './mag-tabs.component.html',
  styleUrls: ['./mag-tabs.component.css']
})
export class MagTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ContentChildren(MagTabDirective) tabs: QueryList<MagTabDirective>;

}