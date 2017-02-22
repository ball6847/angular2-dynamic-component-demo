import { Component } from '@angular/core';
import { Layout, LayoutRow, LayoutColumn, LayoutWidget } from '../designer.interface'

@Component({
  selector: 'layout',
  template: `
    <div *ngFor="let row of rows" [ngClass]="{'container': row.hasContainer}">
      <layout-row class="row" [columns]="row.columns"></layout-row>
    </div>
  `
})
export class LayoutComponent implements Layout {
  rows: LayoutRow[] = [];

  ngOnInit() {
    this.rows = [
      new LayoutRow([
        new LayoutColumn(new LayoutWidget('Hello1Component', {})),
        new LayoutColumn(new LayoutWidget('Hello2Component', {})),
        new LayoutColumn(new LayoutWidget('Hello3Component', {})),
        new LayoutColumn(new LayoutWidget('Hello4Component', {})),
      ]),
      new LayoutRow([
        new LayoutColumn(new LayoutWidget('Hello1Component', {})),
        new LayoutColumn(new LayoutWidget('Hello2Component', {})),
        new LayoutColumn(new LayoutWidget('Hello3Component', {})),
        new LayoutColumn(new LayoutWidget('Hello4Component', {})),
      ]),
    ];
  }
}
