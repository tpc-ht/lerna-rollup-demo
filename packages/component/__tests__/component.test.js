'use strict';

const component = require('..');
const assert = require('assert').strict;

assert.strictEqual(component(), 'Hello from component');
console.info("component tests passed");
