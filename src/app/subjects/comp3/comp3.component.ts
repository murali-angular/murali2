import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from 'src/app/servicespractice/design-utility.service';


@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  ngOnInit() {
  }

  constructor(private _designServices: DesignUtilityService) { 
    this._designServices.userName.subscribe(uname => {
      this.userName = uname
    })
  }

 // userName:string = "Murali Manohar";

  userName;
  updateUserName(uname){
    //this.userName = uname.value; 

    this._designServices.userName.next(uname.value)

  }


}
