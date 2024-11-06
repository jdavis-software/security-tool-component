import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityTool } from '../security-tool.interface';

@Component({
  selector: 'app-queries-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="queries-panel">
      <h2 class="panel-title">HUNT QUERIES</h2>
      
      <div class="queries-content" *ngIf="selectedTool; else noSelection">
        <div class="tool-header">
          <div [class]="'tool-icon ' + selectedTool.color">
            <img [src]="selectedTool.icon" [alt]="selectedTool.name">
          </div>
          <div class="tool-info">
            <h3>{{ selectedTool.name }}</h3>
            <p>{{ selectedTool.queriesInfo }}</p>
          </div>
        </div>
        
        <div class="queries-list">
          <!-- Placeholder for actual queries -->
          <div class="query-item">
            <h4>Example Query 1</h4>
            <p>Description of the query and its purpose</p>
          </div>
        </div>
      </div>
      
      <ng-template #noSelection>
        <div class="no-selection">
          <p>Select a tool to view its queries</p>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .queries-panel {
      padding: 24px;
    }

    .panel-title {
      margin: 0 0 24px;
      font-size: 18px;
      font-weight: 600;
      color: #111827;
    }

    .tool-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #E5E7EB;
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

    .tool-info h3 {
      margin: 0;
      font-size: 16px;
      color: #111827;
    }

    .tool-info p {
      margin: 4px 0 0;
      font-size: 14px;
      color: #6B7280;
    }

    .queries-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .query-item {
      padding: 16px;
      background: white;
      border-radius: 8px;
      border: 1px solid #E5E7EB;
    }

    .query-item h4 {
      margin: 0;
      font-size: 14px;
      color: #111827;
    }

    .query-item p {
      margin: 4px 0 0;
      font-size: 13px;
      color: #6B7280;
    }

    .no-selection {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      background: white;
      border-radius: 8px;
      border: 1px solid #E5E7EB;
    }

    .no-selection p {
      color: #6B7280;
      font-size: 14px;
    }
  `]
})
export class QueriesPanelComponent {
  @Input() selectedTool: SecurityTool | null = null;
}