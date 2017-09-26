import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: any = [];
  message: string;

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    console.log(this.message);
  }

}
