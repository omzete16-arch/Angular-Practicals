import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  students = [
    { name: 'Om Jadhav', course: 'M.Sc. Computer Science', project: 'SOC Log Analysis with Splunk' },
    { name: 'Prajwal Shinde', course: 'M.Sc. Computer Science', project: 'Angular Practical Portal' },
    { name: 'Atharva Gangadhare', course: 'M.Sc. Computer Science', project: 'E-commerce Website' }
  ];
}
