import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ns-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
  public chats = [];
  constructor() {
    this.chats = Array(200).fill('').map((ele, idx) => ({
      contact: {
        avatar: `https://randomuser.me/api/portraits/med/${
                  idx % 2 === 0 ? 'women' : 'men'
                }/${idx}.jpg`,
        // Random names
        name: idx % 2 === 0 ?
              (['Leeanna Munoz', 'Yolanda Karlin', 'Trish Peer'][idx % 3])
            : (['Chuck Pulver', 'Oscar Blundell', 'Irwin Weathersby'][idx % 3])
      },
      type: 'DIRECT',
      when: Date.now() - ((idx + 1) * 7 * 60 * 1000),
      muted: idx % 7 === 0,
      unread: parseInt(Math.random() * 10 + '', 10) - 3,
      // Non-sense phrases
      text: [
        '\u263A Yay, this course is amazing !!! \u270C',
        'Sixty-four doesn\'t like paying taxes.',
        'A river a thousand paces wide ever stuns the onlooker.',
        'That stolen figurine is often one floor above you.',
        '\u263A Yay, this course is amazing !!! \u270C',
        'Spam sat down once more.',
        'Whiskey on the table set a treehouse on fire.'
      ][idx % 7],
    }));
  }

  ngOnInit(): void {
  }
}
