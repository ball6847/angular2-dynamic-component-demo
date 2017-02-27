import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolboxRowComponent } from './toolbox-row/toolbox-row.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { SelectModule } from 'angular2-select';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    ToolboxRowComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule,
    SelectModule,
    FormsModule,
    NgbModule,
    DragulaModule
  ],
  providers: [
    NgbTabsetConfig
  ],
  exports: [
    ToolboxComponent
  ]
})
export class ToolboxModule { }
