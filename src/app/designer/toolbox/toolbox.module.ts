import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToolboxRowComponent } from './toolbox-row/toolbox-row.component';
import { ToolboxRouting } from './toolbox.routing';


@NgModule({
  declarations: [
    ToolboxRowComponent
  ],
  imports: [
    BrowserModule,
    ToolboxRouting
  ],
  providers: [],
})
export class ToolboxModule { }
