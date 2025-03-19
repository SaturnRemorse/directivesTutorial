import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: false,
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  primary = true;

  ob= {
    "primary": this.primary,
    "secondary": !this.primary,
    "fontStyle": true
  }

  offPrimary(){
    this.ob.primary = !this.ob.primary;
    this.ob.secondary = !this.ob.secondary;
  }

  offFontStyle(){
    this.ob.fontStyle = !this.ob.fontStyle;
  }

}

/*
[ngClass] => directive (attribute) add or remove css classes to an html elements

syntax: 
<div [ngClass]="expression"></div> 
expression must return:
string 
array of string
object
*/
