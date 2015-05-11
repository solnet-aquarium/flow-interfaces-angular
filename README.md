# flow-interfaces-angular

Flow interfaces allowing the use of Facebook's [Flow][flow] with [Angular JS][angularjs] projects.

## Note

Until https://github.com/facebook/flow/issues/199 is resolved, this repository is unfortunately less useful than one might hope.

## Usage

 - `bower install --save flow-interfaces-angular`
 - `flow init` at the root of your project
 - Add a `.flowconfig` file with content that resembles:

 ```
 [libs]
 path/to/this/package/interfaces
 ```
 - Run flow on your project

For more information, see [Flow][flow]

[flow]: http://flowtype.org/
[angularjs]: https://angularjs.org/
