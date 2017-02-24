import { Component, ViewEncapsulation } from '@angular/core';
import { LayoutRow, LayoutColumn } from '../../layout/shared/layout.model';
import { LayoutService } from '../../layout/shared/layout.service';


@Component({
  selector: 'toolbox',
  styleUrls: ['./toolbox.component.css'],
  templateUrl: './toolbox.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ToolboxComponent {
  row: LayoutRow;
  col: LayoutColumn;
  rowIndex: number;
  colIndex: number;

  public sizes: Array<any> = [];

  constructor(private layoutService: LayoutService) {
    this.sizes = [
      { value: 'col', label: 'col' },
      { value: 'col-1', label: 'col-1' },
      { value: 'col-2', label: 'col-2' },
      { value: 'col-3', label: 'col-3' },
      { value: 'col-4', label: 'col-4' },
      { value: 'col-5', label: 'col-5' },
      { value: 'col-6', label: 'col-6' },
      { value: 'col-7', label: 'col-7' },
      { value: 'col-8', label: 'col-8' },
      { value: 'col-9', label: 'col-9' },
      { value: 'col-10', label: 'col-10' },
      { value: 'col-11', label: 'col-11' },
      { value: 'col-12', label: 'col-12' }
    ];
  }

  deselected() {
    // not allow empty list
    if (this.col.classes.length == 0) {
      this.col.classes = ['col'];
    }
  }

  ngOnInit() {
    this.layoutService.getWorkspace()
      .subscribe(coord => {
        this.row = coord['row'];
        this.col = coord['col'];
        this.rowIndex = coord['rowIndex'];
        this.colIndex = coord['colIndex'];
      });
  }
}
