import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DesignerComponent } from './designer.component';
import { LayoutComponent } from './components/layout.component';
import { LayoutRowComponent } from './components/layout-row.component';
import { LayoutColumnComponent } from './components/layout-column.component';
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
    LayoutColumnComponent,
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
