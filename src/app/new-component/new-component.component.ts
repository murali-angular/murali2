import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor(private messageService:MessageService) { }
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
   }

clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
}

  ngOnInit() {

  }

}
