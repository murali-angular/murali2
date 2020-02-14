import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  products={};

  constructor(private _msgService: DesignUtilityService) { }

  ngOnInit() {
    //this.products = this._msgService.product;
    this._msgService.product()
    .subscribe(productData => this.products = productData)
  }

  btnClick(){
    this._msgService.messageAlert();
  }

}
