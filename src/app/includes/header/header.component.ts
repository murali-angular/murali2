import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/servicestest/header.service';
import{Route, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //-------------------------------//
  //New properties for Updated Header Concepts//
  //----------------------------------------//

  goBackLink; //for Back Link
  headerNav; //for Menu
  headerLoginBlock; //for Login Link
  headerContactDetails; //for Contact Link
  loggedInUser; //for Contact Details

  constructor(private _header: HeaderService, private route: Router)
  //For Header Contact Details
  {
    this._header.headerContactDetails.subscribe(res => {
      this.headerContactDetails = res
    })

    //For menu 

    this._header.headerNav.subscribe(res => {
      this.headerNav = res
    })




    //For Go Back Link

    this._header.headerNav.subscribe(res => {
      this.goBackLink = res
    })


    //For Login Link

    this._header.headerLoginBlock.subscribe(res => {
      this.headerLoginBlock = res
    })

    //For Contact Link

    this._header.loggedInUser.subscribe(res => {
      this.loggedInUser = res
    })

  }

  onLogOut() {
    this._header.loggedInUser.next('');
    this.route.navigate(['login']);
  }

  ngOnInit() {
    this._header.headerContactDetails.subscribe(res => {
      this.headerContactDetails = res
    })

  }

}




