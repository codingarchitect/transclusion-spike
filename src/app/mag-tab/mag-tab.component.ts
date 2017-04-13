import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mag-tab',
  templateUrl: './mag-tab.component.html',
  styleUrls: ['./mag-tab.component.css']
})
export class MagTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title: string
}
