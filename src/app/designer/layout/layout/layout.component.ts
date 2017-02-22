import { Component } from '@angular/core';
import { Layout, LayoutRow, LayoutColumn, LayoutWidget } from '../layout.model'

@Component({
  selector: 'layout',
  styleUrls: ['./layout.component.css'],
  templateUrl: './layout.component.html'
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

  addRow() {
    this.rows.push(new LayoutRow([
      new LayoutColumn(new LayoutWidget('Hello1Component', {}))
    ]));
  }
}
