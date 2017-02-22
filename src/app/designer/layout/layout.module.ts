import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Layout Components
import { LayoutComponent } from './layout/layout.component';
import { LayoutRowComponent } from './layout-row/layout-row.component';
import { LayoutColComponent } from './layout-col/layout-col.component';

import {
  Hello1Component, Hello2Component, Hello3Component, Hello4Component,
  UnknownComponent, WidgetFactory
} from './layout-widget'

// List of dynamic components
const dynamicComponents = [
  Hello1Component, Hello2Component, Hello3Component, Hello4Component,
  UnknownComponent
];


@NgModule({
  declarations: [
    LayoutComponent,
    LayoutRowComponent,
    LayoutColComponent,
    ...dynamicComponents
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents: [
    ...dynamicComponents
  ],
  providers: [WidgetFactory],
  exports: [
    LayoutComponent
  ],
})
export class LayoutModule { }
