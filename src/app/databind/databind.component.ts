import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  dynamic: string = "Murali Manohar Vaddepally";

  myMethod(){
    return this.dynamic
  }

  appStatus:boolean = false;

  status1 = "Online";
  status2 = "Offline";

}
