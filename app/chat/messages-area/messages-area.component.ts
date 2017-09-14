import { Component, OnInit, Inject, Input } from "@angular/core";
import { Message } from "../../core";

@Component({
  moduleId: module.id,
  selector: "ns-messages-area",
  templateUrl: "./messages-area.component.html",
  styleUrls: ["./messages-area.component.css"]
})
export class MessagesAreaComponent implements OnInit {
  @Input() public messages: Message[];

  ngOnInit(): void {
  }
}