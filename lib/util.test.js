"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const Util = require("./util");
ava_1.default('.generateID returns key with hash', (t) => {
    t.regex(Util.generateID('foo'), /foo-\w{32}/);
});
