import { Component } from '@angular/core';
import { Layout, LayoutRow, LayoutColumn, LayoutWidget } from '../shared/layout.model';
import { LayoutService, LayoutObservable } from '../shared/layout.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'layout',
  styleUrls: ['./layout.component.css'],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  layout: LayoutRow[];
  index: number;

  constructor(
    private layoutService: LayoutService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
      .subscribe(param => {
        this.index = parseInt(param['id']);
      });
  }

  ngOnInit() {
    this.layout = this.layoutService.getLayout();
  }

  addRow() {
    const index = this.layoutService.addRow();
    this.selectRow(index);
  }

  selectRow(index: number) {
    this.router.navigate(['/row', index]);
  }
}
