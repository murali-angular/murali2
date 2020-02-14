import { Component, OnDestroy} from '@angular/core';
import { Subscription} from 'rxjs';
import { MessageService } from '../service';


@Component({
  selector: 'app-murali',
  templateUrl: './murali.component.html',
  styleUrls: ['./murali.component.css']
})
export class MuraliComponent implements OnDestroy {
  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe
    (message => {
      if (message) {
        this.messages.push(message);
      } else {
        //clear messages when empty message received
        this.messages = [];
      }
    });

   }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
