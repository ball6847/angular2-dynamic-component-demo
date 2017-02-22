import { Injectable } from '@angular/core';

import {
  Hello1Component,
  Hello2Component,
  Hello3Component,
  Hello4Component,
  UnknownComponent
} from '../layout-widget/widget.component';


@Injectable()
export class WidgetFactory {
  private mappings = {
    'Hello1Component': Hello1Component,
    'Hello2Component': Hello2Component,
    'Hello3Component': Hello3Component,
    'Hello4Component': Hello4Component
  };

  getComponent(name: string) {
    return this.mappings[name] || UnknownComponent;
  }
}
