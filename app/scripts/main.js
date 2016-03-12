'use strict';

var Foo = require('./modules/Foo.ts').Foo;
var f = new Foo();

console.info(Foo);
console.info(f);
console.info(Foo.bar());
