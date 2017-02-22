import { Component, Input } from '@angular/core';
import { Layout, LayoutRow, LayoutColumn, LayoutWidget } from '../designer.interface'

@Component({
  selector: 'layout-row',
  template: `
    <layout-column [ngClass]="column.classes" *ngFor="let column of columns" [widget]="column.widget"></layout-column>
  `
})
export class LayoutRowComponent {
  @Input()
  columns: LayoutColumn[] = [];
}
