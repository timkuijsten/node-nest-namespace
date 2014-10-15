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

/**
 * Create a nested structure based on flat object key names.
 *
 * @param {Object} obj  object with namespace as key
 * @param {String, default: "."} chr  character to split keynames on
 * @return {Object} nested object
 */
function nestNamespace(obj, chr) {
  chr = chr || '.';

  var result = {};
  Object.keys(obj).forEach(function(key) {
    var parts = key.split(chr);
    var firstNs = parts.shift();

    result[firstNs] = result[firstNs] || {};
    var firstObj = result[firstNs];
    var lastObj = firstObj;
    var prevObj = firstObj;

    var lastPart;
    parts.forEach(function(part) {
      lastObj[part] = lastObj[part] || {};
      prevObj = lastObj;
      lastObj = lastObj[part];
      lastPart = part;
    });
    if (parts.length) {
      prevObj[lastPart] = obj[key];
      result[firstNs] = firstObj;
    } else {
      result[firstNs] = obj[key];
    }
  });
  return result;
}

module.exports = nestNamespace;
