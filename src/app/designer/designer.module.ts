import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DesignerComponent } from './designer.component';

// Layout Components
import { LayoutModule } from './layout/layout.module';

// Toolbox Components
import { ToolboxModule } from './toolbox/toolbox.module';



@NgModule({
  declarations: [
    DesignerComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    ToolboxModule,
    RouterModule.forRoot([], { useHash: true })
  ],
  bootstrap: [
    DesignerComponent
  ]
})
export class DesignerModule { }
