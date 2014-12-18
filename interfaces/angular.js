declare class AngularJSModule {
  controller(name: string, dependencies: Array<Function | string>): AngularJSModule;
}

declare class AngularJS {
  copy(object: Object | Array): Object | Array;
  module(name: string, dependencies: Array<string>): AngularJSModule;
}

declare var angular: AngularJS;
