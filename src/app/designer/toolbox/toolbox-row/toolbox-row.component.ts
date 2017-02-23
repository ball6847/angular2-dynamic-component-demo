import { Component } from '@angular/core';
import { LayoutRow } from '../../layout/shared/layout.model';
import { LayoutService, LayoutObservable } from '../../layout/shared/layout.service';
import 'rxjs/operator/map';
import 'rxjs/operator/do';

@Component({
  selector: 'toolbox-row',
  styleUrls: ['./toolbox-row.component.css'],
  templateUrl: './toolbox-row.component.html'
})
export class ToolboxRowComponent {
  row: LayoutRow;
  index: number;

  constructor(private layoutService: LayoutService) {
  }

  ngOnInit() {
    // this.route.params
    //   .subscribe(params => {
    //     this.index = parseInt(params['id']);
    //     this.row = this.layoutService.getRow(params['id']);
    //
    //     // not elegence enough, but let's ignore it for now
    //     this.layoutService.setActive(params['id']);
    //   });
  }
}
