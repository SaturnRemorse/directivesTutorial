//csClass

import { Directive, Input, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[csClass]'
})
export class csClassDirective implements OnInit{
   @Input() csClass:string | undefined;

   constructor(private ref:ElementRef){

   }
    ngOnInit(): void {
        this.ref.nativeElement.classList.add(this.csClass);
    }

}