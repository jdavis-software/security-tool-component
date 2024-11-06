import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content">
      <h2>Welcome to the Research Page</h2>
      <p>This is the main research dashboard.</p>
    </div>
  `,
  styles: [`
    .content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }
  `]
})
export class HomeComponent {}