import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Layout, LayoutRow, LayoutColumn, LayoutWidget } from './layout.model';

export class LayoutObservable extends ReplaySubject<LayoutRow[]> { }

@Injectable()
export class LayoutService {
  private rows: LayoutRow[] = [
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

  // private observable: LayoutObservable;

  constructor() {
    // this.observable = new LayoutObservable(1);

    // this.observable.next(this.rows);
  }

  addRow() {
    this.rows.push(new LayoutRow([
      new LayoutColumn(new LayoutWidget('NullComponent', {}))
    ]));

    return this.rows.length - 1;

    // this.observable.next(this.rows);
  }

  getRow(index) {
    return this.rows[index];
  }

  getLayout() {
    return this.rows;
  }

  setActive(index) {
    this.rows.forEach(row => {
      row.active = false;
    });

    const row = this.getRow(index);
    row.active = true;
  }
}
