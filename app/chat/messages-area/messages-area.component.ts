import { Component, AfterViewInit, Inject, Input, OnInit } from "@angular/core";
import { Message, SentStatus } from "../../core";

@Component({
  moduleId: module.id,
  selector: "ns-messages-area",
  templateUrl: "./messages-area.component.html",
  styleUrls: ["./messages-area.component.css"]
})
export class MessagesAreaComponent implements OnInit, AfterViewInit {
  @Input() public messages: Message[];

  ngOnInit() {
    this.messages = this.messages.slice(0,50);
  }

  ngAfterViewInit() {
  }

  isContinuation(idx: number) {
    return (!this.messages[idx].sender && this.messages[idx-1] &&
            !this.messages[idx-1].sender) ||
           (this.messages[idx].sender && this.messages[idx-1] &&
            this.messages[idx-1].sender);
  }

  getIcon(message: Message) {
    switch (message.sent) {
      case SentStatus.NOT_SENT:
        return 'mdi-access-time';
      case SentStatus.SENT:
        return 'mdi-done';
      default:
        return 'mdi-done-all';
    }
  }

  isViewed(message: Message) {
    return message.sent === SentStatus.VIEWED;
  }
}