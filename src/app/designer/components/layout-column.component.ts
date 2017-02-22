import {
  Component, Input, OnInit, OnDestroy, ViewChild,
  ViewContainerRef, ComponentFactoryResolver, ComponentRef
} from '@angular/core';

import { WidgetFactory } from '../widgets';
import { LayoutWidget } from '../designer.interface';

@Component({
  selector: 'layout-column',
  styles: [`
    .widget {
      min-height: 90px;
      background: rgba(0, 0, 0, 0.3);
      margin-bottom: 1px;
      text-align: center;
      padding-top: 1em;
    }
  `],
  template: `
    <div class="widget">
      <div #container></div>
    </div>
  `
})
export class LayoutColumnComponent implements OnInit, OnDestroy {
  @Input()
  widget: LayoutWidget;

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  constructor(private wf: WidgetFactory, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const component = this.wf.getComponent(this.widget.component);

    // note: component must be declared within module.entryComponents
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.container.createComponent(factory);

    // set component context
    const instance = <LayoutWidget>this.componentRef.instance;
    instance.options = this.widget.options;
  }

  ngOnDestroy() {
    this.componentRef.destroy();
    this.componentRef = null;
  }
}
