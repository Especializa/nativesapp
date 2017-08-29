import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ns-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  public chatIndex: number;
  public name: string;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.chatIndex = +params['index'];
    });
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    })
  }
}
