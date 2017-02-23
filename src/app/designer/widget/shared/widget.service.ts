import { Injectable } from '@angular/core';

import { DynamicComponents } from '../index';

@Injectable()
export class WidgetFactory {
  private mappings = {};

  constructor() {
    DynamicComponents.forEach(component => {
      this.mappings[component.name] = component;
    });
  }

  getComponent(name: string) {
    return this.mappings[name] || this.mappings['NullComponent'];
  }
}
