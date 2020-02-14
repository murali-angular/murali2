import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['MURALI MANOHAR', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }
  onSubmit(){
    
  }
}
