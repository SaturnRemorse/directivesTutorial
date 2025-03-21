//csClass

import { Directive, Input, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[csClass]',
    standalone:false
})


export class csClassDirective implements OnInit{

    //data property: store class string
   @Input() csClass:string | undefined;

   //inject element ref object by angular
   constructor(private ref:ElementRef){

   }
   //initialize the component
    ngOnInit(): void {
        //adding the class to elemment
        this.ref.nativeElement.classList.add(this.csClass);
    }

}