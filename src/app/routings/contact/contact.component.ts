import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/servicestest/header.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  UserName = "";

  genders = [
    {id:'1', value:'Male'},
    {id:'2', value:'Female'},
  ];

  formData = {
    username: '',
    email: '',
    course: '',
    gender: ''
  }
  defaultGender = 'Male';
  
 @ViewChild( myForm,{static:true}) myForm:NgForm;
 defaultCourse = 'Angular';
 submitted = true;
  constructor(private _header: HeaderService) { }

  ngOnInit() {
    this._header.headerContactDetails.next(true)
    this._header.headerLoginBlock.next(false)
    
  }

  onSubmit(form:NgForm){
     console.log(this.myForm)
     this.submitted = true;
     this.formData.username = this.myForm.value.userDetail.username;
     this.formData.email = this.myForm.value.email;
     this.formData.course = this.myForm.value.course;
     this.formData.gender = this.myForm.value.gender;
     this.myForm.reset();
  }

  setUsername(){
   /*  this.myForm.setValue({
      userDetail: {
        username: 'MuraliManohar',
        email:''
      },
      course:'',
      gender:'' */
    //})

    this.myForm.form.patchValue({
      userDetail: {
        username: 'MuraliManohar',
      }
    })
  }

  ngOnDestroy() {
    this._header.headerContactDetails.next(false);
    this._header.headerLoginBlock.next(true);
  }
}
