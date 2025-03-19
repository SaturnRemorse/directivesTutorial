import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  standalone: false,
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {

  styleOb={
    color:'blue',
    'background-color': 'cyan'
  }

}

/*
[ngStyle] = allow to add or remove inline styles on html elements based on expression or syntax

<div [ngStyle] = "{'styleNames':'expression'}"
*/
