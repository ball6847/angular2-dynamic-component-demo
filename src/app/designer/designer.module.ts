import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DesignerComponent } from './designer.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutRowComponent } from './layout-row/layout-row.component';
import { LayoutColComponent } from './layout-col/layout-col.component';
import {
  Hello1Component,
  Hello2Component,
  Hello3Component,
  Hello4Component,
  UnknownComponent,
  WidgetFactory
} from './widgets'

@NgModule({
  declarations: [
    DesignerComponent,
    LayoutComponent,
    LayoutRowComponent,
    LayoutColComponent,
    Hello1Component,
    Hello2Component,
    Hello3Component,
    Hello4Component,
    UnknownComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    Hello1Component,
    Hello2Component,
    Hello3Component,
    Hello4Component,
    UnknownComponent
  ],
  providers: [WidgetFactory],
  bootstrap: [DesignerComponent]
})
export class DesignerModule { }
