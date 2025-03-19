import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: false,
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  active = false;
  count = 3;

  changeState(){
    this.active = !this.active;
  }

}

/*

*ngIf - angular directive: add or remove elements based on some condition active= true

syntax:
<div *ngIf="condition"></div>

condition= can be anything, it can be property or any expression that evaluates to true or false


ngIf else:

<ng-template>
*/

