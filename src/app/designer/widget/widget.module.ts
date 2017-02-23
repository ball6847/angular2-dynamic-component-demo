import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DynamicComponents } from './index';
import { WidgetFactory } from './shared/widget.service';


@NgModule({
  declarations: [
    ...DynamicComponents
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents: [
    ...DynamicComponents
  ],
  providers: [
    WidgetFactory
  ],
})
export class WidgetModule { }
