import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DragulaModule } from 'ng2-dragula';

// Layout Components
import { LayoutComponent } from './layout/layout.component';
import { LayoutRowComponent } from './layout-row/layout-row.component';
import { LayoutColComponent } from './layout-col/layout-col.component';

// service
import { LayoutService } from './shared/layout.service';


@NgModule({
  declarations: [
    LayoutComponent,
    LayoutRowComponent,
    LayoutColComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([]),
    DragulaModule
  ],
  providers: [
    LayoutService
  ],
  exports: [
    LayoutComponent
  ],
})
export class LayoutModule { }
