import {
  Component, Input, OnInit, OnDestroy, ViewChild,
  ViewContainerRef, ComponentFactoryResolver, ComponentRef
} from '@angular/core';

import { WidgetFactory } from '../widgets';
import { LayoutWidget } from '../layout.model';

@Component({
  selector: 'layout-col',
  styleUrls: ['./layout-col.component.css'],
  templateUrl: './layout-col.component.html'
})
export class LayoutColComponent implements OnInit, OnDestroy {
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
