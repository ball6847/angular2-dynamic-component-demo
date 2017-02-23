import { Component } from '@angular/core';
import { LayoutRow, LayoutColumn } from '../../layout/shared/layout.model';
import { LayoutService } from '../../layout/shared/layout.service';


@Component({
  selector: 'toolbox',
  styleUrls: ['./toolbox.component.css'],
  templateUrl: './toolbox.component.html'
})
export class ToolboxComponent {
  row: LayoutRow;
  col: LayoutColumn;
  rowIndex: number;
  colIndex: number;

  public sizes: Array<string> = [
    'col',
    'col-1',
    'col-2',
    'col-3',
    'col-4',
    'col-5',
    'col-6',
    'col-7',
    'col-8',
    'col-9',
    'col-10',
    'col-11',
    'col-12'
  ];

  classes: string = 'col';

  constructor(private layoutService: LayoutService) {
  }

  changeColumnSize(size) {
    console.log(size);
    // this.classes = this.col.classes[0] = size;
  }

  ngOnInit() {
    console.log(this.sizes);
    this.layoutService.getWorkspace()
      .subscribe(coord => {
        this.row = coord['row'];
        this.col = coord['col'];
        this.rowIndex = coord['rowIndex'];
        this.colIndex = coord['colIndex'];
        this.classes = coord['col'] ? coord['col'].classes[0] : 'col';
      });
  }
}
