declare var AngularJSIterable: Object | Array;
declare var AngularJSStringNumber: string | number;

declare class AngularJSCallbacks {
  iterator(value: any, key: string | number): void;
  css(index: number, value: string): AngularJSStringNumber;
}

declare class AngularJSJQueryLite {
  bind(eventType: string, handler: Function): AngularJSJQueryLite;
  unbind(eventType: string): AngularJSJQueryLite;
  unbind(eventType: string, handler: Function): AngularJSJQueryLite;
  css(propertyName: string): string;
  css(propertyName: string, value: string): AngularJSJQueryLite;
  css(propertyName: string, propertyFunction: AngularJSCallbacks.css): AngularJSJQueryLite;
  css(properties: Object): AngularJSJQueryLite;
}

declare class AngularJSModule {
  controller(name: string, dependencies: Array<Function | string>): AngularJSModule;
  directive(name: string, directiveFactory: Array<Function | string>):AngularJSModule;
  directive(name: { name: Array<Function | string> }):AngularJSModule;
  value(name: string, object: any): AngularJSModule;
}

declare class AngularJS {
  copy(object: Object | Array): Object | Array;
  extend<T>(dst: T, src: Object): T;
  module(name: string, dependencies: Array<string>): AngularJSModule;
  element(element: string | Element): AngularJSJQueryLite;
  forEach(obj: AngularJSIterable, iterator: AngularJSCallbacks.iterator): AngularJSIterable;
  forEach(obj: AngularJSIterable, iterator: AngularJSCallbacks.iterator, context: Object): AngularJSIterable;
}

declare var angular: AngularJS;
