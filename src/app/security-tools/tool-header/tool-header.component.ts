import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '@progress/kendo-angular-icons';
import { SVGIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-tool-header',
  standalone: true,
  imports: [CommonModule, IconsModule],
  template: `
    <div class="tool-header" (click)="toggle.emit()">
      <div class="header-left">
        <h2 class="title">A Cyborg Security Demo Environment</h2>
        <p class="subtitle">Cyborg Security Demo Environment</p>
      </div>
      <div class="header-right">
        <div class="compatibility-info">
          <span class="compatibility-item">
            <span class="dot green"></span>
            5 Compatible Tool(s)
          </span>
          <span class="compatibility-item">
            <span class="dot yellow"></span>
            1 Partially Compatible Tool(s)
          </span>
          <span class="compatibility-item">
            <span class="dot red"></span>
            0 Incompatible Tool(s)
          </span>
        </div>
        <span class="expand-icon">
          {{ isExpanded ? '▼' : '▲' }}
        </span>
      </div>
    </div>
  `,
  styles: [`
    .tool-header {
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      background: white;
    }

    .header-left .title {
      color: #00A3FF;
      font-size: 20px;
      margin: 0;
      font-weight: 500;
    }

    .header-left .subtitle {
      color: #6B7280;
      margin: 4px 0 0;
      font-size: 14px;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .compatibility-info {
      display: flex;
      gap: 16px;
    }

    .compatibility-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #6B7280;
      font-size: 14px;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
    }

    .dot.green { background-color: #22C55E; }
    .dot.yellow { background-color: #F59E0B; }
    .dot.red { background-color: #EF4444; }

    .expand-icon {
      font-size: 16px;
      color: #6B7280;
      display: flex;
      align-items: center;
    }
  `]
})
export class ToolHeaderComponent {
  @Input() isExpanded = false;
  @Output() toggle = new EventEmitter<void>();
}