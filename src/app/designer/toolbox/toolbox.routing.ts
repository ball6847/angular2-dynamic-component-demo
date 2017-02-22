import { RouterModule, Routes } from '@angular/router';

import { ToolboxRowComponent } from './toolbox-row/toolbox-row.component';

const appRoutes: Routes = [
  { path: 'row/:id', component: ToolboxRowComponent },
  // { path: '**', component: PageNotFoundComponent }
];


export const ToolboxRouting = RouterModule.forChild(appRoutes);
