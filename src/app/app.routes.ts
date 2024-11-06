import { Routes } from '@angular/router';
import { SecurityToolsComponent } from './security-tools/security-tools.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tools', pathMatch: 'full' },
  { path: 'tools', component: SecurityToolsComponent }
];