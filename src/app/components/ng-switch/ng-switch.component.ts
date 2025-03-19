import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  standalone: false,
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {

  num = 1;
  day = "sunday"

  // increase(){
  //   this.num+=1;
  // }

}
