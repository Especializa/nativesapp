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
    this.selectedIndex = this.platform.isAndroid ? 1 : 3;
  }
}
