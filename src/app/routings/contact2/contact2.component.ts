import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit {
  formStatus;

  myReactiveForm: FormGroup;
  notAllowedNames = ['Shekhar', 'Sonu'];
  genders = [
    {
      id: 1,
      genderType: 'Male'
    },
    {
      id: 2,
      genderType: 'Female'
    }
  ]

  constructor() { }

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'userDetail': new FormGroup({
        'username': new FormControl(null, Validators.required, this.NaNames.bind(this)),
        'email': new FormControl(null, [Validators.required, Validators.email], this.NaEmails),
      }),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null)
      ])
    });
    /* this.myReactiveForm.valueChanges.subscribe(
      (value) => console.log(value)
    ) */
    this.myReactiveForm.statusChanges.subscribe(
      (status) => {
        console.log(status)
        this.formStatus = status
      }
    );
/* 
    setTimeout(() => {
      this.myReactiveForm.setValue({
        'userDetail': {
          'username': 'Murali',
          'email': 'abc@abc.com'
        },
        'course': 'Html',
        'gender': 'Female',
        'skills': [
          'Photoshop'
        ]
      })
    }, 2000) */
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetail': {
          'email': 'abc@abc.com'
        },
      })
    }, 2000);

  }
  onSubmit(){
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset({
      'userDetail': {
        'username': '',
        'email': ''
      },
      'course': 'Angular',
      'gender': 'Male',
      'skills': [
        ''
      ] 
    });
  }
  onAddSkills() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(control))
  }

  NaNames(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return { 'nameIsNotAllowed': true }
    }
    return null;
  }

  NaEmails(controls: FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (controls.value === 'manohar@gmail.com') {
          resolve({ 'emailNotAllowed': true })
        }
        else {
          resolve(null)
        }
      }, 1500);
    })
    return myResponse;
  }
}


