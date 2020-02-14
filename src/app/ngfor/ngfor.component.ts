import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  products = [
    { proimg: 'https://unsplash.com/photos/1SAnrIxw5OY', name: 'Laptop', id: 'pro01', price: 15000 },
    { proimg: 'https://unsplash.com/photos/xsGxhtAsfSA', name: 'Mobile', id: 'pro02', price: 8000 },
    { proimg: 'https://unsplash.com/photos/qYMkkREOHa4', name: 'TV', id: 'pro03', price: 32000 },
    { proimg: 'https://unsplash.com/photos/iALEk3nQvLI', name: 'Washing Machine', id: 'pro01', price: 45000 }
  ]

  users = [];

  onCreateUser(uname) {
    this.users.push({
      name: uname.value
    });
    if (this.users.length > 3) {
      this.router.navigate(['products']);
    }

  }


  onRemoveUser(uname) {
    this.users.splice(
      this.users.length - 1
    )
  }
  onRemoveItem(item) {
    this.users.splice(item, 1)

  }
}
