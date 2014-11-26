# nest-namespace

Create a nested structure based on flat object key names.

## Example

Create an object from a 1d, 2d and 3d namespace:

    var nestNamespace = require('nest-namespace');

    var result = nestNamespace({
      'foo': 'bar',
      'baz.baz.quux': 'baz',
      'bar.qux': 'bar'
    });

    assert.deepEqual(result, {
      foo: 'bar',
      baz: {
        baz: {
          quux: 'baz'
        }
      },
      bar: {
        qux: 'bar'
      }
    });

## Installation

    $ npm install nest-namespace

## API

### nestNamespace(obj, chr)
 * obj {Object}  object with namespace as key
 * chr {String, default: "."}  character to split keynames on
 * @return {Object}  nested object

Create a nested structure based on flat object key names.

## Tests

    $ npm test

## License

MIT

Copyright (c) 2014 Tim Kuijsten

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
