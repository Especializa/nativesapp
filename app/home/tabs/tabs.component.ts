import { Component, OnInit, Inject } from '@angular/core';
import * as platform from 'platform';

@Component({
    moduleId: module.id,
    selector: 'ns-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  public selectedIndex: number;
  constructor() {}

  ngOnInit(): void {
    this.selectedIndex = platform.isAndroid ? 1 : 3;
  }
}
