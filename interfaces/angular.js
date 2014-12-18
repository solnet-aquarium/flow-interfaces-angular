declare class AngularJS {
  copy(object: Object | Array): Object | Array;
  module(name: string, dependencies: Array<number | string>): Object;
}

declare var angular: AngularJS;
