import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/servicestest/header.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private _header: HeaderService) { }

  ngOnInit() {
    this._header.headerNav.next(false);
    this._header.goBackLink.next({text:'Back to Products', url:'/products'});
  }

  ngOnDestroy(){
    this._header.headerNav.next(true);
    this._header.goBackLink.next({text:'', url:''});  
  }

}
