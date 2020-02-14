import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mypro:boolean = false;

  myStyle1 = "15px";

  isActive:boolean = true;

  mltclasses = {
    class1:true,
    class2:true,
    class3:true
  }

}
