import { Component, Input } from '@angular/core';
import { Layout, LayoutRow, LayoutColumn, LayoutWidget } from '../designer.interface'

@Component({
  selector: 'layout-row',
  styleUrls: ['./layout-row.component.css'],
  templateUrl: './layout-row.component.html'
})
export class LayoutRowComponent {
  @Input()
  columns: LayoutColumn[] = [];
}
