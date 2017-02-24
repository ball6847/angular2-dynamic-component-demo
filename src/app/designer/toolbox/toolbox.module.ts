import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolboxRowComponent } from './toolbox-row/toolbox-row.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { SelectModule } from 'angular2-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ToolboxRowComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule,
    SelectModule,
    FormsModule
  ],
  providers: [],
  exports: [
    ToolboxComponent
  ]
})
export class ToolboxModule { }
