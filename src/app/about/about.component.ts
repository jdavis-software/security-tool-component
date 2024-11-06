import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content">
      <h2>About</h2>
      <p>This application demonstrates the integration of Kendo UI components with Angular, featuring:</p>
      <ul>
        <li>Material Theme</li>
        <li>Dark/Light mode toggle</li>
        <li>Navigation</li>
        <li>Responsive layout</li>
      </ul>
    </div>
  `,
  styles: [`
    .content {
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class AboutComponent {}