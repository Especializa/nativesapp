import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { ChatsService } from './chats.service';

@Component({
  moduleId: module.id,
  selector: 'ns-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  public chats = [];
  constructor(
    chatsService: ChatsService,
    private routerExtensions: RouterExtensions
  ) {
    this.chats = chatsService.chats;
  }

  ngOnInit(): void {
  }

  goToChat(args) {
    this.routerExtensions.navigate([
      'chat',
      this.chats[args.index]
    ]);
  }
}
