import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  constructor(private ref:ElementRef) {
    
    
   }

   @HostListener("mouseenter")
   onMouseEnter(){
    console.log("enter");
    this.highlight('yellow');

   }

   @HostListener("mouseleave")
   onMouseLeave(){
    console.log("leave")
    this.highlight('');
   }

   private highlight(color: string){
    this.ref.nativeElement.style.backgroundColor = color;
   }

}
