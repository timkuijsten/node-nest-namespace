/**
 * Copyright (c) 2014 Tim Kuijsten
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';

var assert = require('assert');

var nestNamespace = require('./index');

var result;

// return empty object
result = nestNamespace({});
assert.deepEqual(result, {});

// work with 1d namespace
result = nestNamespace({ foo: 'bar' });
assert.deepEqual(result, { foo: 'bar' });

// assert work with 2d namespace
result = nestNamespace({ 'foo.baz': 'bar' });
assert.deepEqual(result, { foo: { baz: 'bar' } });

// work with 3d namespace
result = nestNamespace({ 'foo.baz.qux': 'bar' });
assert.deepEqual(result, { foo: { baz: { qux: 'bar' } } });

// work with 1d, 2d and 3d namespace
result = nestNamespace({
  'foo': 'bar',
  'baz.baz.quux': 'baz',
  'bar.qux': 'bar'
});
assert.deepEqual(result, {
  foo: 'bar',
  baz: { baz: { quux: 'baz' }},
  bar: { qux: 'bar' }
});

// use last key on duplicate keys
result = nestNamespace({
  'foo.bar.qux': 'bar',
  'foo.bar': 'baz'
});
assert.deepEqual(result, {
  foo: { bar: 'baz' }
});

// work with shared keys
result = nestNamespace({
  'foo.bar': 'bar',
  'foo.baz': 'baz'
});
assert.deepEqual(result, {
  foo: {
    bar: 'bar',
    baz: 'baz'
  }
});

console.log('ok');
