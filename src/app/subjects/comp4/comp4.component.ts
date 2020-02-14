import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from 'src/app/servicespractice/design-utility.service';


@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private _designServices: DesignUtilityService) { 
    this._designServices.userName.subscribe(uname => {
      this.userName = uname
    })
  }

  ngOnInit() {
  }

  //userName:string = "Murali Manohar";

  userName;

  updateUserName(uname){
    //this.userName = uname.value; 

    this._designServices.userName.next(uname.value)

  }



}
