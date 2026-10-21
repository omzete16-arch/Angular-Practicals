import { Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { Contact } from './contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact }
];
