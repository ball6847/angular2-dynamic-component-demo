import { Component } from '@angular/core';
import { LayoutWidget } from '../shared/layout.model'

// ------------------------------------------------

@Component({
  selector: 'hello1-component',
  template: `
    <div>Hello1 Component</div>
  `
})
export class Hello1Component implements LayoutWidget {
  component = 'Hello1Component';
  options = {};
}

// ------------------------------------------------

@Component({
  selector: 'hello2-component',
  template: `
    <div>Hello2 Component</div>
  `
})
export class Hello2Component implements LayoutWidget {
  component = 'Hello2Component';
  options = {};
}

// ------------------------------------------------

@Component({
  selector: 'hello3-component',
  template: `
    <div>Hello3 Component</div>
  `
})
export class Hello3Component implements LayoutWidget {
  component = 'Hello3Component';
  options = {};
}

// ------------------------------------------------

@Component({
  selector: 'hello4-component',
  template: `
    <div>Hello4 Component</div>
  `
})
export class Hello4Component implements LayoutWidget {
  component = 'Hello4Component';
  options = {};
}

// ------------------------------------------------

@Component({
  selector: 'unknown-component',
  template: `
    <div>Something Went Wrong!</div>
  `
})
export class UnknownComponent implements LayoutWidget {
  component = 'UnknownComponent';
  options = {};
}
