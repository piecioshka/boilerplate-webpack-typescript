'use strict';

require('file-loader?name=[name].[ext]!./index.html');

import Foo from './modules/foo';
let f = new Foo();

console.info(Foo);
console.info(f);
console.info(Foo.bar());
