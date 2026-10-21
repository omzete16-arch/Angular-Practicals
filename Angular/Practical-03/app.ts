import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App {
  title = 'String Interpolation Demo';
  username = 'Om Jadhav';
  today = new Date();

  getGreeting() {
    return 'Good day, ' + this.username + '!';
  }
}
