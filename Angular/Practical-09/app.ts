import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h2>Route Parameters Demo</h2><router-outlet></router-outlet>'
})
export class App {
}
