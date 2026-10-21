import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Student List</h2>
    <ul>
      <li *ngFor="let s of students">
        <a [routerLink]="['/student', s.id]">{{ s.id }} - {{ s.name }}</a>
      </li>
    </ul>
  `
})
export class StudentList {
  students = [
    { id: 101, name: 'Om Jadhav' },
    { id: 102, name: 'Prajwal Shinde' },
    { id: 103, name: 'Atharva Gangadhare' }
  ];
}
