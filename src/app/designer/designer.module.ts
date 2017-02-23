import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DesignerComponent } from './designer.component';

import { LayoutModule } from './layout/layout.module';
import { WidgetModule } from './widget/widget.module';
import { ToolboxModule } from './toolbox/toolbox.module';



@NgModule({
  declarations: [
    DesignerComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    ToolboxModule,
    WidgetModule,
    RouterModule.forRoot([], { useHash: true })
  ],
  bootstrap: [
    DesignerComponent
  ]
})
export class DesignerModule { }
