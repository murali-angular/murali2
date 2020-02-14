import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  //for users

  users = [];
  
  pushUsers(data) {
    this.users.push(data);
  }

  onRemoveUsers(item){
    this.users.splice(item,1)
  }

//for Admins
  admins = [];

  pushAdmins(data) {
    this.admins.push(data);
  }
  
  onRemoveAdmins(item){
    this.users.splice(item,1)
  }
}
