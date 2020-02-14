import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/servicestest/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _header: HeaderService, private router: Router) { }

  ngOnInit() {
  }
  onLoggedIn(username,password) {

    var uname = username.value;
    var password = password.value;

    if(password.value == '123'){
      this._header.loggedInUser.next('username.value');
      this.router.navigate(['home'])
    }

    else{
      alert('Please fill correct details.')
    }
  
    
  }

}
