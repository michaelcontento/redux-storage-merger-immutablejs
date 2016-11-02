# [redux-storage-merger-immutablejs][]

[![build](https://travis-ci.org/michaelcontento/redux-storage-merger-immutablejs.svg?branch=master)](https://travis-ci.org/michaelcontento/redux-storage-merger-immutablejs)
[![dependencies](https://david-dm.org/michaelcontento/redux-storage-merger-immutablejs.svg)](https://david-dm.org/michaelcontento/redux-storage-merger-immutablejs)
[![devDependencies](https://david-dm.org/michaelcontento/redux-storage-merger-immutablejs/dev-status.svg)](https://david-dm.org/michaelcontento/redux-storage-merger-immutablejs#info=devDependencies)

[![license](https://img.shields.io/npm/l/redux-storage-merger-immutablejs.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-merger-immutablejs)
[![npm version](https://img.shields.io/npm/v/redux-storage-merger-immutablejs.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-merger-immutablejs)
[![npm downloads](https://img.shields.io/npm/dm/redux-storage-merger-immutablejs.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-merger-immutablejs)

Merger for [redux-storage][] that know how to deal with [ImmutableJS][] objects.

# Deprecated - No longer maintained

My focus has left the node / react ecosystem and this module is no
longer maintained. Maybe [redux-persist](https://github.com/rt2zz/redux-persist) 
is a good replacement for you? Or if you want to step in and become
the new owner - just ping me :smile:

Thank you for your patience and using this module in the first place!

## Installation

    npm install --save redux-storage-merger-immutablejs

## Usage

Custom mergers, like this one, can simply be passed as second argument to [redux-storage][]s `reducer`:

```js
import merger from 'redux-storage-merger-immutablejs';
const reducer = storage.reducer(reducer, merger);
```

## License

    The MIT License (MIT)

    Copyright (c) 2016 Michael Contento

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  [redux-storage]: https://github.com/michaelcontento/redux-storage
  [redux-storage-merger-immutablejs]: https://github.com/michaelcontento/redux-storage-merger-immutablejs
  [ImmutableJS]: https://github.com/michaelcontento/redux-storage-decorator-immutablejs
