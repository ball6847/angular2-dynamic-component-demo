import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SelectModule } from 'ng2-select';
import { ToolboxRowComponent } from './toolbox-row/toolbox-row.component';
import { ToolboxComponent } from './toolbox/toolbox.component';


@NgModule({
  declarations: [
    ToolboxRowComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule,
    SelectModule
  ],
  providers: [],
  exports: [
    ToolboxComponent
  ]
})
export class ToolboxModule { }
