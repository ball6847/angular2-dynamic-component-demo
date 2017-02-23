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

  public sizes: Array<any> = [
    { id: 'col', text: 'col' },
    { id: 'col-1', text: 'col-1' },
    { id: 'col-2', text: 'col-2' },
    { id: 'col-3', text: 'col-3' },
    { id: 'col-4', text: 'col-4' },
    { id: 'col-5', text: 'col-5' },
    { id: 'col-6', text: 'col-6' },
    { id: 'col-7', text: 'col-7' },
    { id: 'col-8', text: 'col-8' },
    { id: 'col-9', text: 'col-9' },
    { id: 'col-10', text: 'col-10' },
    { id: 'col-11', text: 'col-11' },
    { id: 'col-12', text: 'col-12' }
  ];

  selected;

  classes: string = 'col';

  constructor(private layoutService: LayoutService) {
  }

  changeColumnSize(size) {
    console.log(size);
    // this.classes = this.col.classes[0] = size;
  }

  public refreshValue(value: any): void {
    this.selected = value;
    console.log(this.selected);
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
