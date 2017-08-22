import { Component, OnInit } from '@angular/core';

import { ChatsService } from './chats.service';

@Component({
  moduleId: module.id,
  selector: 'ns-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  public chats = [];
  constructor(chatsService: ChatsService) {
    this.chats = chatsService.chats;
  }

  ngOnInit(): void {
  }
}
