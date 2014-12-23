/* jshint ignore: start */
declare class AngularJS_HTTP {
  get(url: string): Promise;
  get(url: string, config: Object): Promise;
}

declare var $http: AngularJS_HTTP;

