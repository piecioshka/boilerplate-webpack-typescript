'use strict';

require('./index.html');

import Foo from './modules/foo';

const f = new Foo();

console.log(Foo);
console.log(f);
console.log(Foo.bar());
console.log(2 + 2);
