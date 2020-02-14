import { Directive, Renderer2, ElementRef, HostListener,HostBinding } from '@angular/core';


@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'pink')
  }


  /* 
    changeBg(color: string) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue')
    } */

  @HostBinding('style.backgroundColor') bgColor ="green";
  @HostBinding('class.myClass') className;
  @HostBinding('attr.alt') myTitle
  @HostListener('click') myClick() {
    this.bgColor = 'blue';
    this.className = true;
    this.myTitle = 'this is test title'
    // alert('Clicked')
   /*  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue') */
  }

  @HostListener('mouseover') myMouseOver() {
 /*    alert('MouseOver') */
 this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red')
  }

  @HostListener('mouseout') myMouseOut() {
   /*  alert('MouseOut') */
   this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'green')
  }

}
