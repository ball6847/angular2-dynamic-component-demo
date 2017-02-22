import { Component, Injectable } from '@angular/core';
import {
  Hello1Component,
  Hello2Component,
  Hello3Component,
  Hello4Component,
  UnknownComponent
} from './components';


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

export {
Hello1Component,
Hello2Component,
Hello3Component,
Hello4Component,
UnknownComponent
}
