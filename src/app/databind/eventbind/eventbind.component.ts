import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  msg: string = "";

  onAddCart(event) {
    this.msg = event.target.value + "Added in Cart";
  }

  onInputClick(event) {
    console.log(event.target.value);
  }

  getInputInfo(my){
    console.log(my.name)
  }
}
