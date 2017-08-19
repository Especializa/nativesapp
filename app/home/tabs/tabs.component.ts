import { Component, OnInit, Inject } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ns-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  public selectedIndex: number;
  constructor(
    @Inject('platform') public platform
  ) {}

  ngOnInit(): void {
    if (this.platform.isAndroid) {
      this.selectedIndex = 1;
    } else {
      this.selectedIndex = 3;
    }
  }
}
