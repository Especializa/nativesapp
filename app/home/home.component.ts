import { Component, OnInit, Inject } from '@angular/core';
import * as platform from 'platform';

@Component({
    moduleId: module.id,
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public platform;
  constructor() {
    this.platform = platform;
  }

  ngOnInit(): void {
  }

  onTabChanged(event) {
  }
}
