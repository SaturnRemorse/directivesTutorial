import { Component } from '@angular/core';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-ng-for',
  standalone: false,
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  students = [
    new Student("zenitsu", "trainee", true),
    new Student("giyu", "hashira", true),
    new Student("daki", "demon", false),
    new Student("tengen", "hashira", false),
    new Student("obenai", "hashira", true)

  ];

  removeItem(){
    this.students.pop();
  }

}

/*
ng-for: repeating elements for n number of times based on some variable
<html-element *ngFor = "let a of array"><html-element>

ngFor provides several variables
1. index -- current position --start 0
2. count -- total number of items in a collection
3. first -- true if loop is at first position
4. last -- true if last pe
5. even, odd -- true if even/odd pe
*/
