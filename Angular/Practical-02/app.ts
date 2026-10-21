import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class App {
  timetable = [
    { time: '9:00 - 10:00', task: 'Machine Learning lecture' },
    { time: '10:00 - 11:00', task: 'Full Stack Development lecture' },
    { time: '11:00 - 12:00', task: 'Spring Framework lecture' },
    { time: '12:00 - 1:00', task: 'Lunch break' },
    { time: '1:00 - 3:00', task: 'FSD practical lab' },
    { time: '3:00 - 4:00', task: 'Self study' }
  ];
}
