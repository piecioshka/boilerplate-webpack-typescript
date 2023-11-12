"use strict";

import "./index.html";

import { Foo } from "./modules/foo";

function main() {
    console.log("boilerplate-webpack-typescript");
    const f = new Foo();

    console.log(Foo);
    console.log(f);
    console.log(Foo.bar());
    console.log(2 + 2);
}

main();
