import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';

/* import { DesignUtilityService } from 'src/app/servicespractice/design-utility.service'; */

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit, AfterViewInit {
  /* 
    constructor(private _designServices: DesignUtilityService) {
      this._designServices.userName.subscribe(uname => {
        this.userName = uname
      })
    }
   */
  userName = "Murali Manohar";

  @ViewChild('box', { static: false }) box: ElementRef;
  @ViewChild('Comp2Component', { static: false }) child: Comp2Component;

  constructor(private renderer: Renderer2) {
  }
  ngOnInit() {
    $(window).scroll(function(){
      console.log('window Scrolling')
    })
  }

  ngAfterViewInit() {
    /*   console.log(this.box);
      this.box.nativeElement.style.backgroundColor="blue"
      this.box.nativeElement.classList="boxblue" */
    /*    this.box.nativeElement.innnerHTML="this is modified html" */

    this.renderer.setStyle(this.box.nativeElement, 'background', 'red')
    this.renderer.setStyle(this.box.nativeElement, 'color', 'red')
    this.renderer.addClass(this.box.nativeElement, 'myClass')
    this.renderer.setAttribute(this.box.nativeElement, 'title', 'this is test title')

    console.log(this.child)


  }

  changeChildProperty() {

    this.child.userName = "Murali Manohar"
  }

  callChildMethod() {
    this.child.clickMe()
  }

  @HostListener('click') myClick() {

    alert('clicked')

  }

  @HostListener('window:scroll', ['$event']) myScroll() {
    console.log('window Scrolling')
  }

}
