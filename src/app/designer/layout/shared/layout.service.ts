import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Layout, LayoutRow, LayoutColumn, LayoutWidget } from './layout.model';

export class LayoutObservable extends ReplaySubject<LayoutRow[]> { }

@Injectable()
export class LayoutService {
  private rows: LayoutRow[] = [];

  constructor() {
    this.rows = [
      new LayoutRow([
        new LayoutColumn(new LayoutWidget('NullComponent', {})),
        new LayoutColumn(new LayoutWidget('NullComponent', {})),
        new LayoutColumn(new LayoutWidget('NullComponent', {})),
        new LayoutColumn(new LayoutWidget('NullComponent', {})),
      ]),
      new LayoutRow([
        new LayoutColumn(new LayoutWidget('NullComponent', {})),
        new LayoutColumn(new LayoutWidget('NullComponent', {})),
        new LayoutColumn(new LayoutWidget('NullComponent', {})),
        new LayoutColumn(new LayoutWidget('NullComponent', {})),
      ]),
    ];
  }


  getLayout() {
    return this.rows;
  }

  addRow() {
    this.rows.push(new LayoutRow([
      new LayoutColumn(new LayoutWidget('NullComponent', {}))
    ]));

    return this.rows.length - 1;
  }

  getRow(index) {
    return this.rows[index];
  }

  getActiveCoord() {
    // @TODO apply interface
    const coord = {
      row: undefined,
      col: undefined
    };

    this.rows.forEach(row => {
      row.columns.forEach(col => {
        if (col.widget.active) {
          coord.row = row;
          coord.col = col;
        }
      });
    });

    return coord;
  }

  setActive(index) {

  }

  deactivateAllWidgets() {
    this.rows.forEach(row => {
      row.columns.forEach(col => {
        col.widget.active = false;
      });
    });
  }
}
