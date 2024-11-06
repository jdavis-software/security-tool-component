import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityTool } from '../security-tool.interface';

@Component({
  selector: 'app-tool-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tools-list">
      <div 
        *ngFor="let tool of tools" 
        class="tool-item"
        [class.selected]="selectedTool?.name === tool.name"
        (click)="onToolClick(tool)"
      >
        <div class="tool-info">
          <div [class]="'tool-icon ' + tool.color">
            <img [src]="tool.icon" [alt]="tool.name">
          </div>
          <div class="tool-details">
            <h3>{{ tool.name }}</h3>
            <p>{{ tool.queriesInfo }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tools-list {
      display: flex;
      flex-direction: column;
    }

    .tool-item {
      padding: 16px;
      border-bottom: 1px solid #E5E7EB;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .tool-item:hover {
      background-color: #F9FAFB;
    }

    .tool-item.selected {
      background-color: #F3F4F6;
    }

    .tool-item:last-child {
      border-bottom: none;
    }

    .tool-info {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .tool-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tool-icon.red { background-color: #FEE2E2; }
    .tool-icon.blue { background-color: #DBEAFE; }
    .tool-icon.green { background-color: #DCFCE7; }
    .tool-icon.yellow { background-color: #FEF3C7; }

    .tool-icon img {
      width: 24px;
      height: 24px;
    }

    .tool-details h3 {
      margin: 0;
      font-size: 16px;
      color: #111827;
    }

    .tool-details p {
      margin: 4px 0 0;
      font-size: 14px;
      color: #6B7280;
    }
  `]
})
export class ToolListComponent {
  @Input() tools: SecurityTool[] = [];
  @Input() selectedTool: SecurityTool | null = null;
  @Output() toolSelect = new EventEmitter<SecurityTool>();

  onToolClick(tool: SecurityTool) {
    this.toolSelect.emit(tool);
  }
}