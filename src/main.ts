import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { DesignerModule } from './app/designer/designer.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(DesignerModule);
