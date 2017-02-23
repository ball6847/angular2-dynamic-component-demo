import { Component } from '@angular/core';
import { Layout, LayoutRow, LayoutColumn, LayoutWidget } from '../shared/layout.model';
import { LayoutService, LayoutObservable } from '../shared/layout.service';

@Component({
  selector: 'layout',
  styleUrls: ['./layout.component.css'],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  layout: LayoutRow[];
  index: number;

  constructor(private layoutService: LayoutService) {
  }

  ngOnInit() {
    this.layout = this.layoutService.getLayout();
  }

  addRow() {
    const index = this.layoutService.addRow();
  }
}
