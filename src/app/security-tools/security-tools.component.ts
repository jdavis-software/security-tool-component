import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolHeaderComponent } from './tool-header/tool-header.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { QueriesPanelComponent } from './queries-panel/queries-panel.component';
import { SecurityTool } from './security-tool.interface';

@Component({
  selector: 'app-security-tools',
  standalone: true,
  imports: [CommonModule, ToolHeaderComponent, ToolListComponent, QueriesPanelComponent],
  template: `
    <div class="security-tools-container">
      <app-tool-header
        [isExpanded]="isExpanded"
        (toggle)="toggleExpanded()"
      ></app-tool-header>
      
      <div class="content" *ngIf="isExpanded">
        <div class="split-view">
          <div class="tools-panel">
            <app-tool-list
              [tools]="tools"
              [selectedTool]="selectedTool"
              (toolSelect)="onToolSelect($event)"
            ></app-tool-list>
          </div>
          <div class="queries-panel">
            <app-queries-panel
              [selectedTool]="selectedTool"
            ></app-queries-panel>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .security-tools-container {
      border: 1px solid var(--border-color);
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .content {
      border-top: 1px solid var(--border-color);
    }

    .split-view {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 400px;
    }

    .tools-panel {
      border-right: 1px solid var(--border-color);
    }

    .queries-panel {
      background-color: #f9fafb;
    }
  `]
})
export class SecurityToolsComponent {
  isExpanded = false;
  selectedTool: SecurityTool | null = null;
  
  tools: SecurityTool[] = [
    {
      name: 'CrowdStrike',
      icon: 'assets/crowdstrike-icon.svg',
      color: 'red',
      queriesInfo: '1 of 1 queries compatible'
    },
    {
      name: 'CrowdStrike LogScale',
      icon: 'assets/crowdstrike-logscale-icon.svg',
      color: 'red',
      queriesInfo: '1 of 1 queries compatible'
    },
    {
      name: 'Microsoft Defender',
      icon: 'assets/microsoft-defender-icon.svg',
      color: 'blue',
      queriesInfo: '1 of 1 queries compatible'
    },
    {
      name: 'Microsoft Sentinel',
      icon: 'assets/microsoft-sentinel-icon.svg',
      color: 'blue',
      queriesInfo: '1 of 1 queries compatible'
    },
    {
      name: 'Palo',
      icon: 'assets/palo-icon.svg',
      color: 'green',
      queriesInfo: '1 of 1 queries compatible'
    },
    {
      name: 'Splunk',
      icon: 'assets/splunk-icon.svg',
      color: 'yellow',
      queriesInfo: '3 of 4 queries compatible'
    }
  ];

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  onToolSelect(tool: SecurityTool) {
    this.selectedTool = tool;
  }
}