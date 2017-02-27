import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolboxRowComponent } from './toolbox-row/toolbox-row.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { SelectModule } from 'angular2-select';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ToolboxRowComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule,
    SelectModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    NgbTabsetConfig
  ],
  exports: [
    ToolboxComponent
  ]
})
export class ToolboxModule { }
