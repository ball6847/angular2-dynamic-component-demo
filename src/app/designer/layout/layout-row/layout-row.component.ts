import { Component, Input } from '@angular/core';
import { LayoutRow } from '../shared/layout.model'

@Component({
  selector: 'layout-row',
  styleUrls: ['./layout-row.component.css'],
  templateUrl: './layout-row.component.html'
})
export class LayoutRowComponent {
  @Input()
  row: LayoutRow;

  newColumn() {
    this.row.newColumn();
  }
}
