import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Layout, LayoutRow, LayoutColumn, LayoutWidget } from './layout.model';

export class LayoutObservable extends ReplaySubject<LayoutRow[]> { }

@Injectable()
export class LayoutService {
  private rows: LayoutRow[] = [];
  private workspace$: ReplaySubject<{}>;

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

  getWorkspace() {
    this.workspace$ = new ReplaySubject(1);
    this.broadcastWorkspace();
    return this.workspace$;
  }

  broadcastWorkspace() {
    // @TODO apply interface
    const coord = {
      row: undefined,
      col: undefined,
      rowIndex: undefined,
      colIndex: undefined
    };

    this.rows.forEach((row, rowIndex) => {
      row.columns.forEach((col, colIndex) => {
        if (col.widget.active) {
          coord.row = row;
          coord.col = col;
          coord.rowIndex = rowIndex;
          coord.colIndex = colIndex;
        }
      });
    });

    this.workspace$.next(coord);
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
