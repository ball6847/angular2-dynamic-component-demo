import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { WidgetFactory } from '../../widget/shared/widget.service';
import { LayoutWidget, LayoutColumn } from '../shared/layout.model';
import { LayoutService } from '../shared/layout.service';

@Component({
  selector: 'layout-col',
  styleUrls: ['./layout-col.component.css'],
  templateUrl: './layout-col.component.html'
})
export class LayoutColComponent {
  @Input()
  column: LayoutColumn;

  @Input()
  widget: LayoutWidget;

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  constructor(
    private widgetFactory: WidgetFactory,
    private componentFactoryResolver: ComponentFactoryResolver,
    private layoutService: LayoutService,
  ) {
  }

  ngOnInit() {
    this.render(this.widget);
  }

  ngOnDestroy() {
    this.componentRef.destroy();
    this.componentRef = null;
  }

  activate(widget) {
    this.layoutService.deactivateAllWidgets();
    widget.active = true;
  }

  private render(widget) {
    const component = this.widgetFactory.getComponent(widget.component);

    // note: component must be declared within module.entryComponents
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.container.createComponent(factory);

    // set component context
    const instance = <LayoutWidget>this.componentRef.instance;
    instance.options = widget.options;
  }
}
