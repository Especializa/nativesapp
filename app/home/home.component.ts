import { Component, OnInit, Inject } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    @Inject('platform') public platform
  ) {}

  ngOnInit(): void {
  }
}
