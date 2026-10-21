import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class App {
  students: string[] = [
    'Om Jadhav', 'Prajwal Shinde', 'Atharva Gangadhare', 'Rohan Patil',
    'Sneha Kulkarni', 'Amit Sharma', 'Priya Deshmukh', 'Kiran Satpute',
    'Neha Yadav', 'Varun Mehta'
  ];
}
