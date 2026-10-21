import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class App {
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  periods: string[] = ['9AM-10AM', '10AM-11AM', '11AM-12PM', '12PM-1PM'];

  // timetable[day][period] = subject
  timetable: string[][] = [
    ['ML', 'FSD', 'SF', 'ASD'],
    ['FSD', 'ML', 'ASD', 'SF'],
    ['SF', 'ASD', 'ML', 'FSD'],
    ['ASD', 'SF', 'FSD', 'ML'],
    ['ML', 'SF', 'FSD', 'ASD']
  ];
}
