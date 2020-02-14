import { Component, OnInit, ContentChild, ElementRef, AfterContentInit, Renderer2,ViewChild } from '@angular/core';
import {TestDirective} from 'src/app/appDirectives/test.directive'
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, AfterContentInit {
  userName = "Default Value";

  @ContentChild('childCon', { static: false }) childparagraph: ElementRef

  @ViewChild(TestDirective,{static:false}) myDir:TestDirective;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    console.log(this.childparagraph)
    this.renderer.setStyle(this.childparagraph.nativeElement, 'color', 'red')
  }

  // userName:string = "Murali Manohar";

  clickMe() {
    alert(this.userName);
    var text = this.renderer.createText('this text is created by renderer')
    this.renderer.appendChild(this.childparagraph, text)
  }

  changeColor(color){
   /*  this.renderer.setStyle(this.el.nativeElement, 'background') */
   this.myDir.changeBg(color)
  }

}
