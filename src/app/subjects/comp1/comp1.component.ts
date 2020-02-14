import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
/* import { DesignUtilityService } from 'src/app/servicespractice/design-utility.service'; */

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
 export class Comp1Component implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
 AfterViewInit,AfterViewChecked,OnDestroy{ 

  constructor(){
    console.log('constructor called')
  }
/* 
  //constructor(private _designServices: DesignUtilityService) { 
    //this._designServices.userName.subscribe(uname => {
      //this.userName = uname
    //})
  //} */
  @Input() myValue="Murali Manohar";

  counter;
  num:number = 1;

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChnages called'+ '' + changes.myValue)
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.counter = setInterval(()=>{
      this.num = this.num + 1;
      console.log(this.num)
    },1000)
  }

  ngDoCheck(){
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called')

  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')

  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
  }
  ngAfterViewChecked(){
   console.log('')
  }
  ngOnDestroy(){
    console.log('ngOndestroy called')
    clearInterval(this.counter)
  }
  
  //for subject
  //userName:string = "Murali Manohar";
  //for beahvioral subject just put username and check
  
  /* userName;
  updateUserName(uname){
    //this.userName = uname.value; 

    this._designServices.userName.next(uname.value)

  } */

 

}
