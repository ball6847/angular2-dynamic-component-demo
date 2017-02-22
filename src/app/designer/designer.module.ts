import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { DesignerComponent } from './designer.component';

// Layout Components
import { LayoutModule } from './layout/layout.module';

// Toolbox Components
import { ToolboxRowComponent } from './toolbox/toolbox-row/toolbox-row.component';

const appRoutes: Routes = [
  { path: 'row-:row', component: ToolboxRowComponent },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    DesignerComponent,
    ToolboxRowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule
  ],
  bootstrap: [DesignerComponent]
})
export class DesignerModule { }
