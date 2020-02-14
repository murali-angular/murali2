import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageAlert() {
    alert("Thanks for subscribe.we wll get in touch with you shortly")
  }


  constructor() { }
  
}
