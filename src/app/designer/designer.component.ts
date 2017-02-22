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
    <router-outlet></router-outlet>
  `
})
export class DesignerComponent { }
