import { Component } from '@angular/core';

@Component({
  selector: 'designer-component',
  styles: [`
    layout {
      padding-top: 1em;
      display: block;
    }
  `],
  template: `
    <layout></layout>
    <toolbox></toolbox>
  `
})
export class DesignerComponent { }
