<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Float64Array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Typed array][mdn-typed-array] constructor which returns a [typed array][mdn-typed-array] representing an array of double-precision floating-point numbers in the platform byte order.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
Float64Array = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var Float64Array = require( 'path/to/vendor/umd/array-float64/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.Float64Array;
})();
</script>
```

#### Float64Array()

A [typed array][mdn-typed-array] constructor which returns a [typed array][mdn-typed-array] representing an array of double-precision floating-point numbers in the platform byte order.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array();
// returns <Float64Array>
```

#### Float64Array( length )

Returns a [typed array][mdn-typed-array] having a specified length.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( 5 );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]
```

#### Float64Array( typedarray )

Creates a [typed array][mdn-typed-array] from another [typed array][mdn-typed-array].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var arr1 = new Float32Array( [ 0.5, 0.5, 0.5 ] );
var arr2 = new Float64Array( arr1 );
// returns <Float64Array>[ 0.5, 0.5, 0.5 ]
```

#### Float64Array( obj )

Creates a [typed array][mdn-typed-array] from an array-like `object` or iterable.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 0.5, 0.5, 0.5 ] );
// returns <Float64Array>[ 0.5, 0.5, 0.5 ]
```

#### Float64Array( buffer\[, byteOffset\[, length]] )

Returns a [typed array][mdn-typed-array] view of an [`ArrayBuffer`][@stdlib/array/buffer].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );

var buf = new ArrayBuffer( 32 );
var arr = new Float64Array( buf, 0, 4 );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0 ]
```

* * *

### Properties

<a name="static-prop-bytes-per-element"></a>

#### Float64Array.BYTES_PER_ELEMENT

Number of bytes per view element.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var nbytes = Float64Array.BYTES_PER_ELEMENT;
// returns 8
```

<a name="static-prop-name"></a>

#### Float64Array.name

[Typed array][mdn-typed-array] constructor name.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var str = Float64Array.name;
// returns 'Float64Array'
```

<a name="prop-buffer"></a>

#### Float64Array.prototype.buffer

**Read-only** property which returns the [`ArrayBuffer`][@stdlib/array/buffer] referenced by the [typed array][mdn-typed-array].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( 5 );
var buf = arr.buffer;
// returns <ArrayBuffer>
```

<a name="prop-byte-length"></a>

#### Float64Array.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the [typed array][mdn-typed-array].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( 5 );
var byteLength = arr.byteLength;
// returns 40
```

<a name="prop-byte-offset"></a>

#### Float64Array.prototype.byteOffset

**Read-only** property which returns the offset (in bytes) of the [typed array][mdn-typed-array] from the start of its [`ArrayBuffer`][@stdlib/array/buffer].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( 5 );
var byteOffset = arr.byteOffset;
// returns 0
```

<a name="prop-bytes-per-element"></a>

#### Float64Array.prototype.BYTES_PER_ELEMENT

Number of bytes per view element.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( 5 );
var nbytes = arr.BYTES_PER_ELEMENT;
// returns 8
```

<a name="prop-length"></a>

#### Float64Array.prototype.length

**Read-only** property which returns the number of view elements.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( 5 );
var len = arr.length;
// returns 5
```

* * *

### Methods

<a name="static-method-from"></a>

#### Float64Array.from( src\[, map\[, thisArg]] )

Creates a new typed array from an array-like `object` or an iterable.

```javascript
var arr = Float64Array.from( [ 1.0, -1.0 ] );
// returns <Float64Array>[ 1.0, -1.0 ]
```

To invoke a function for each `src` value, provide a callback function.

```javascript
function mapFcn( v ) {
    return v * 2.0;
}

var arr = Float64Array.from( [ 1.0, -1.0 ], mapFcn );
// returns <Float64Array>[ 2.0, -2.0 ]
```

A callback function is provided two arguments:

-   `value`: source value
-   `index`: source index

To set the callback execution context, provide a `thisArg`.

```javascript
function mapFcn( v ) {
    this.count += 1;
    return v * 2.0;
}

var ctx = {
    'count': 0
};

var arr = Float64Array.from( [ 1.0, -1.0 ], mapFcn, ctx );
// returns <Float64Array>[ 2.0, -2.0 ]

var n = ctx.count;
// returns 2
```

<a name="static-method-of"></a>

#### Float64Array.of( element0\[, element1\[, ...elementN]] )

Creates a new typed array from a variable number of arguments.

```javascript
var arr = Float64Array.of( 1.0, -1.0 );
// returns <Float64Array>[ 1.0, -1.0 ]
```

<a name="method-copy-within"></a>

#### Float64Array.prototype.copyWithin( target, start\[, end] )

Copies a sequence of elements within an array starting at `start` and ending at `end` (non-inclusive) to the position starting at `target`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

// Copy the last two elements to the first two elements:
arr.copyWithin( 0, 3 );

var v = arr[ 0 ];
// returns 4.0

v = arr[ 1 ];
// returns 5.0
```

By default, `end` equals the number of array elements (i.e., one more than the last array index). To limit the sequence length, provide an `end` argument.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

// Copy the first two elements to the last two elements:
arr.copyWithin( 3, 0, 2 );

var v = arr[ 3 ];
// returns 1.0

v = arr[ 4 ];
// returns 2.0
```

When a `target`, `start`, and/or `end` index is negative, the respective index is determined relative to the last array element. The following example achieves the same behavior as the previous example:

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

// Copy the first two elements to the last two elements:
arr.copyWithin( -2, -5, -3 );

var v = arr[ 3 ];
// returns 1.0

v = arr[ 4 ];
// returns 2.0
```

<a name="method-entries"></a>

#### Float64Array.prototype.entries()

Returns an iterator for iterating over array key-value pairs.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0 ] );

// Create an iterator:
var it = arr.entries();

// Iterate over key-value pairs...
var v = it.next().value;
// returns [ 0, 1.0 ]

v = it.next().value;
// returns [ 1, 2.0 ]

var bool = it.next().done;
// returns true
```

<a name="method-every"></a>

#### Float64Array.prototype.every( predicate\[, thisArg] )

Tests whether all array elements pass a test implemented by a `predicate` function.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    return ( v <= 1.0 );
}

var arr = new Float64Array( [ 1.0, 2.0 ] );

var bool = arr.every( predicate );
// returns false
```

A `predicate` function is provided three arguments:

-   `value`: array element
-   `index`: array index
-   `arr`: array on which the method is invoked

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    this.count += 1;
    return ( v >= 1.0 );
}

var ctx = {
    'count': 0
};

var arr = new Float64Array( [ 1.0, 2.0 ] );

var bool = arr.every( predicate, ctx );
// returns true

var n = ctx.count;
// returns 2
```

<a name="method-fill"></a>

#### Float64Array.prototype.fill( value\[, start\[, end]] )

Fills an array from a `start` index to an `end` index (non-inclusive) with a provided `value`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( 2 );

// Set all array elements to the same value:
arr.fill( 2.0 );

var v = arr[ 0 ];
// returns 2.0

v = arr[ 1 ];
// returns 2.0

// Set all array elements starting from the first index to the same value:
arr.fill( 3.0, 1 );

v = arr[ 0 ];
// returns 2.0

v = arr[ 1 ];
// returns 3.0

// Set all array elements, except the last element, to the same value:
arr.fill( 4.0, 0, arr.length-1 );

v = arr[ 0 ];
// returns 4.0

v = arr[ 1 ];
// returns 3.0
```

When a `start` and/or `end` index is negative, the respective index is determined relative to the last array element.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( 2 );

// Set all array elements, except the last element, to the same value:
arr.fill( 2.0, -arr.length, -1 );

var v = arr[ 0 ];
// returns 2.0

v = arr[ 1 ];
// returns 0.0
```

<a name="method-filter"></a>

#### Float64Array.prototype.filter( predicate\[, thisArg] )

Creates a new array (of the same data type as the host array) which includes those elements for which a `predicate` function returns a truthy value.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    return ( v >= 2.0 );
}

var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.filter( predicate );
// returns <Float64Array>[ 2.0, 3.0 ]
```

If a `predicate` function does not return a truthy value for any array element, the method returns an empty array.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    return ( v >= 10.0 );
}

var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.filter( predicate );
// returns <Float64Array>[]
```

A `predicate` function is provided three arguments:

-   `value`: array element
-   `index`: array index
-   `arr`: array on which the method is invoked

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    this.count += 1;
    return ( v >= 2.0 );
}

var ctx = {
    'count': 0
};

var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.filter( predicate, ctx );

var n = ctx.count;
// returns 3
```

<a name="method-find"></a>

#### Float64Array.prototype.find( predicate\[, thisArg] )

Returns the first array element for which a provided `predicate` function returns a truthy value.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    return ( v > 2.0 );
}

var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var v = arr.find( predicate );
// returns 3.0
```

If a `predicate` function does not return a truthy value for any array element, the method returns `undefined`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    return ( v < 1.0 );
}

var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var v = arr.find( predicate );
// returns undefined
```

A `predicate` function is provided three arguments:

-   `value`: array element
-   `index`: array index
-   `arr`: array on which the method is invoked

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    this.count += 1;
    return ( v > 2.0 );
}

var ctx = {
    'count': 0
};

var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var v = arr.find( predicate, ctx );
// returns 3.0

var n = ctx.count;
// returns 3
```

<a name="method-find-index"></a>

#### Float64Array.prototype.findIndex( predicate\[, thisArg] )

Returns the index of the first array element for which a provided `predicate` function returns a truthy value.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    return ( v >= 3.0 );
}

var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var idx = arr.findIndex( predicate );
// returns 2
```

If a `predicate` function does not return a truthy value for any array element, the method returns `-1`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    return ( v < 1.0 );
}

var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var idx = arr.findIndex( predicate );
// returns -1
```

A `predicate` function is provided three arguments:

-   `value`: array element
-   `index`: array index
-   `arr`: array on which the method is invoked

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    this.count += 1;
    return ( v >= 3.0 );
}

var ctx = {
    'count': 0
};

var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var idx = arr.findIndex( predicate, ctx );
// returns 2

var n = ctx.count;
// returns 3
```

<a name="method-for-each"></a>

#### Float64Array.prototype.forEach( fcn\[, thisArg] )

Invokes a callback for each array element.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var str = '';

function fcn( v, i ) {
    str += i + ':' + v;
    if ( i < arr.length-1 ) {
        str += ' ';
    }
}

arr.forEach( fcn );

console.log( str );
// => '0:1 1:2 2:3'
```

The callback is provided three arguments:

-   `value`: array element
-   `index`: array index
-   `arr`: array on which the method is invoked

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function fcn() {
    this.count += 1;
}

var ctx = {
    'count': 0
};

var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

arr.forEach( fcn, ctx );

var n = ctx.count;
// returns 3
```

<a name="method-includes"></a>

#### Float64Array.prototype.includes( searchElement\[, fromIndex] )

Returns a `boolean` indicating whether an array includes a search element.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var bool = arr.includes( 3.0 );
// returns true

bool = arr.includes( 0.0 );
// returns false
```

By default, the method searches the entire array (`fromIndex = 0`). To begin searching from a specific array index, provide a `fromIndex`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var bool = arr.includes( 1.0, 1 );
// returns false
```

When a `fromIndex` is negative, the starting index is resolved relative to the last array element.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var bool = arr.includes( 1.0, -2 );
// returns false
```

The method does **not** distinguish between signed and unsigned zero.

<a name="method-index-of"></a>

#### Float64Array.prototype.indexOf( searchElement\[, fromIndex] )

Returns the index of the first array element strictly equal to a search element.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var idx = arr.indexOf( 3.0 );
// returns 2

idx = arr.indexOf( 0.0 );
// returns -1
```

By default, the method searches the entire array (`fromIndex = 0`). To begin searching from a specific array index, provide a `fromIndex`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var idx = arr.indexOf( 1.0, 1 );
// returns -1
```

When a `fromIndex` is negative, the starting index is resolved relative to the last array element.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var idx = arr.indexOf( 1.0, -2 );
// returns -1
```

The method does **not** distinguish between signed and unsigned zero.

<a name="method-join"></a>

#### Float64Array.prototype.join( \[separator] )

Serializes an array by joining all array elements as a string.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var str = arr.join();
// returns '1,2,3'
```

By default, the method delineates array elements using a comma `,`. To specify a custom separator, provide a `separator` string.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var str = arr.join( '|' );
// returns '1|2|3'
```

<a name="method-keys"></a>

#### Float64Array.prototype.keys()

Returns an iterator for iterating over array keys.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0 ] );

// Create an iterator:
var it = arr.keys();

// Iterate over keys...
var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

<a name="method-last-index-of"></a>

#### Float64Array.prototype.lastIndexOf( searchElement\[, fromIndex] )

Returns the index of the last array element strictly equal to a search element, iterating from right to left.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 0.0, 2.0, 0.0, 1.0 ] );

var idx = arr.lastIndexOf( 0.0 );
// returns 3

idx = arr.lastIndexOf( 3.0 );
// returns -1
```

By default, the method searches the entire array (`fromIndex = -1`). To begin searching from a specific array index, provide a `fromIndex`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 0.0, 2.0, 0.0, 1.0 ] );

var idx = arr.lastIndexOf( 0.0, 2 );
// returns 1
```

When a `fromIndex` is negative, the starting index is resolved relative to the last array element.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 0.0, 2.0, 0.0, 1.0 ] );

var idx = arr.lastIndexOf( 0.0, -3 );
// returns 1
```

The method does **not** distinguish between signed and unsigned zero.

<a name="method-map"></a>

#### Float64Array.prototype.map( fcn\[, thisArg] )

Maps each array element to an element in a new array having the same data type as the host array.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function fcn( v ) {
    return v * 2.0;
}

var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.map( fcn );
// returns <Float64Array>[ 2.0, 4.0, 6.0 ]
```

A callback is provided three arguments:

-   `value`: array element
-   `index`: array index
-   `arr`: array on which the method is invoked

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function fcn( v ) {
    this.count += 1;
    return v * 2.0;
}

var ctx = {
    'count': 0
};

var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.map( fcn, ctx );

var n = ctx.count;
// returns 3
```

<a name="method-reduce"></a>

#### Float64Array.prototype.reduce( fcn\[, initialValue] )

Applies a function against an accumulator and each element in an array and returns the accumulated result.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function fcn( acc, v ) {
    return acc + ( v*v );
}

var arr = new Float64Array( [ 2.0, 1.0, 3.0 ] );

var v = arr.reduce( fcn );
// returns 12.0
```

If not provided an initial value, the method invokes a provided function with the first array element as the first argument and the second array element as the second argument.

If provided an initial value, the method invokes a provided function with the initial value as the first argument and the first array element as the second argument.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function fcn( acc, v ) {
    return acc + ( v*v );
}

var arr = new Float64Array( [ 2.0, 1.0, 3.0 ] );

var v = arr.reduce( fcn, 0.0 );
// returns 14.0
```

A callback is provided four arguments:

-   `acc`: accumulated result
-   `value`: array element
-   `index`: array index
-   `arr`: array on which the method is invoked

<a name="method-reduce-right"></a>

#### Float64Array.prototype.reduceRight( fcn\[, initialValue] )

Applies a function against an accumulator and each element in an array and returns the accumulated result, iterating from right to left.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function fcn( acc, v ) {
    return acc + ( v*v );
}

var arr = new Float64Array( [ 2.0, 1.0, 3.0 ] );

var v = arr.reduceRight( fcn );
// returns 8.0
```

If not provided an initial value, the method invokes a provided function with the last array element as the first argument and the second-to-last array element as the second argument.

If provided an initial value, the method invokes a provided function with the initial value as the first argument and the last array element as the second argument.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function fcn( acc, v ) {
    return acc + ( v*v );
}

var arr = new Float64Array( [ 2.0, 1.0, 3.0 ] );

var v = arr.reduce( fcn, 0.0 );
// returns 14.0
```

A callback is provided four arguments:

-   `acc`: accumulated result
-   `value`: array element
-   `index`: array index
-   `arr`: array on which the method is invoked

<a name="method-reverse"></a>

#### Float64Array.prototype.reverse()

Reverses an array **in-place** (thus mutating the array on which the method is invoked).

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 2.0, 0.0, 3.0 ] );

// Reverse the array:
arr.reverse();

var v = arr[ 0 ];
// returns 3.0

v = arr[ 1 ];
// returns 0.0

v = arr[ 2 ];
// returns 2.0
```

<a name="method-set"></a>

#### Float64Array.prototype.set( arr\[, offset] )

Sets array elements.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
// returns <Float64Array>[ 1.0, 2.0, 3.0 ]

// Set the first two array elements:
arr.set( [ 4.0, 5.0 ] );

var v = arr[ 0 ];
// returns 4.0

v = arr[ 1 ];
// returns 5.0
```

By default, the method starts writing values at the first array index. To specify an alternative index, provide an index `offset`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
// returns <Float64Array>[ 1.0, 2.0, 3.0 ]

// Set the last two array elements:
arr.set( [ 4.0, 5.0 ], 1 );

var v = arr[ 1 ];
// returns 4.0

v = arr[ 2 ];
// returns 5.0
```

<a name="method-slice"></a>

#### Float64Array.prototype.slice( \[begin\[, end]] )

Copies array elements to a new array with the same underlying data type as the host array.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.slice();

var bool = ( arr1 === arr2 );
// returns false

bool = ( arr1.buffer === arr2.buffer );
// returns false

var v = arr2[ 0 ];
// returns 1.0

v = arr2[ 1 ];
// returns 2.0

v = arr2[ 2 ];
// returns 3.0
```

By default, the method copies elements beginning with the first array element. To specify an alternative array index at which to begin copying, provide a `begin` index (inclusive).

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.slice( 1 );

var len = arr2.length;
// returns 2

var v = arr2[ 0 ];
// returns 2.0

v = arr2[ 1 ];
// returns 3.0
```

By default, the method copies all array elements after `begin`. To specify an alternative array index at which to end copying, provide an `end` index (exclusive).

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.slice( 0, 2 );

var len = arr2.length;
// returns 2

var v = arr2[ 0 ];
// returns 1.0

v = arr2[ 1 ];
// returns 2.0
```

When a `begin` and/or `end` index is negative, the respective index is determined relative to the last array element.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.slice( -arr1.length, -1 );

var len = arr2.length;
// returns 2

var v = arr2[ 0 ];
// returns 1.0

v = arr2[ 1 ];
// returns 2.0
```

<a name="method-some"></a>

#### Float64Array.prototype.some( predicate\[, thisArg] )

Tests whether at least one array element passes a test implemented by a `predicate` function.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    return ( v >= 2.0 );
}

var arr = new Float64Array( [ 1.0, 2.0 ] );

var bool = arr.some( predicate );
// returns true
```

A `predicate` function is provided three arguments:

-   `value`: array element
-   `index`: array index
-   `arr`: array on which the method is invoked

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function predicate( v ) {
    this.count += 1;
    return ( v >= 2.0 );
}

var ctx = {
    'count': 0
};

var arr = new Float64Array( [ 1.0, 1.0 ] );

var bool = arr.some( predicate, ctx );
// returns false

var n = ctx.count;
// returns 2
```

<a name="method-sort"></a>

#### Float64Array.prototype.sort( \[compareFunction] )

Sorts an array **in-place** (thus mutating the array on which the method is invoked).

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 2.0, 3.0, 0.0 ] );

// Sort the array (in ascending order):
arr.sort();

var v = arr[ 0 ];
// returns 0.0

v = arr[ 1 ];
// returns 2.0

v = arr[ 2 ];
// returns 3.0
```

By default, the method sorts array elements in ascending order. To impose a custom order, provide a `compareFunction`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
function descending( a, b ) {
    return b - a;
}

var arr = new Float64Array( [ 2.0, 3.0, 0.0 ] );

// Sort the array (in descending order):
arr.sort( descending );

var v = arr[ 0 ];
// returns 3.0

v = arr[ 1 ];
// returns 2.0

v = arr[ 2 ];
// returns 0.0
```

The comparison function is provided two array elements, `a` and `b`, per invocation, and its return value determines the sort order as follows:

-   If the comparison function returns a value **less** than zero, then the method sorts `a` to an index lower than `b` (i.e., `a` should come **before** `b`).
-   If the comparison function returns a value **greater** than zero, then the method sorts `a` to an index higher than `b` (i.e., `b` should come **before** `a`).
-   If the comparison function returns **zero**, then the relative order of `a` and `b` _should_ remain unchanged.

<a name="method-subarray"></a>

#### Float64Array.prototype.subarray( \[begin\[, end]] )

Creates a new typed array view over the same underlying [`ArrayBuffer`][@stdlib/array/buffer] and with the same underlying data type as the host array.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.subarray();
// returns <Float64Array>[ 1.0, 2.0, 3.0 ]

var bool = ( arr1.buffer === arr2.buffer );
// returns true
```

By default, the method creates a typed array view beginning with the first array element. To specify an alternative array index at which to begin, provide a `begin` index (inclusive).

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.subarray( 1 );
// returns <Float64Array>[ 2.0, 3.0 ]

var bool = ( arr1.buffer === arr2.buffer );
// returns true
```

By default, the method creates a typed array view which includes all array elements after `begin`. To limit the number of array elements after `begin`, provide an `end` index (exclusive).

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.subarray( 0, 2 );
// returns <Float64Array>[ 1.0, 2.0 ]

var bool = ( arr1.buffer === arr2.buffer );
// returns true
```

When a `begin` and/or `end` index is negative, the respective index is determined relative to the last array element.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.subarray( -arr1.length, -1 );
// returns <Float64Array>[ 1.0, 2.0 ]

var bool = ( arr1.buffer === arr2.buffer );
// returns true
```

If the method is unable to resolve indices to a non-empty array subsequence, the method returns an empty typed array.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr1 = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var arr2 = arr1.subarray( 10, -1 );
// returns <Float64Array>[]
```

<a name="method-to-locale-string"></a>

#### Float64Array.prototype.toLocaleString( \[locales\[, options]] )

Serializes an array as a locale-specific `string`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var str = arr.toLocaleString();
// returns '1,2,3'
```

<a name="method-to-string"></a>

#### Float64Array.prototype.toString()

Serializes an array as a `string`.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var str = arr.toString();
// returns '1,2,3'
```

<a name="method-values"></a>

#### Float64Array.prototype.values()

Returns an iterator for iterating over array elements.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var arr = new Float64Array( [ 1.0, 2.0 ] );

// Create an iterator:
var it = arr.values();

// Iterate over array elements...
var v = it.next().value;
// returns 1.0

v = it.next().value;
// returns 2.0

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

* * *

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var arr;
var i;

arr = new ctor( 10 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = randu() * 100.0;
}
console.log( arr );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-buffer`][@stdlib/array/buffer]</span><span class="delimiter">: </span><span class="description">ArrayBuffer.</span>
-   <span class="package-name">[`@stdlib/array-float32`][@stdlib/array/float32]</span><span class="delimiter">: </span><span class="description">Float32Array.</span>
-   <span class="package-name">[`@stdlib/array-int16`][@stdlib/array/int16]</span><span class="delimiter">: </span><span class="description">Int16Array.</span>
-   <span class="package-name">[`@stdlib/array-int32`][@stdlib/array/int32]</span><span class="delimiter">: </span><span class="description">Int32Array.</span>
-   <span class="package-name">[`@stdlib/array-int8`][@stdlib/array/int8]</span><span class="delimiter">: </span><span class="description">Int8Array.</span>
-   <span class="package-name">[`@stdlib/array-uint16`][@stdlib/array/uint16]</span><span class="delimiter">: </span><span class="description">Uint16Array.</span>
-   <span class="package-name">[`@stdlib/array-uint32`][@stdlib/array/uint32]</span><span class="delimiter">: </span><span class="description">Uint32Array.</span>
-   <span class="package-name">[`@stdlib/array-uint8`][@stdlib/array/uint8]</span><span class="delimiter">: </span><span class="description">Uint8Array.</span>
-   <span class="package-name">[`@stdlib/array-uint8c`][@stdlib/array/uint8c]</span><span class="delimiter">: </span><span class="description">Uint8ClampedArray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-float64.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-float64

[test-image]: https://github.com/stdlib-js/array-float64/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/array-float64/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-float64/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-float64?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-float64.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-float64/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-float64/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-float64/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-float64/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-float64/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-float64/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-float64/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-float64/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-float64/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer/tree/umd

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/umd

[@stdlib/array/int16]: https://github.com/stdlib-js/array-int16/tree/umd

[@stdlib/array/int32]: https://github.com/stdlib-js/array-int32/tree/umd

[@stdlib/array/int8]: https://github.com/stdlib-js/array-int8/tree/umd

[@stdlib/array/uint16]: https://github.com/stdlib-js/array-uint16/tree/umd

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/umd

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8/tree/umd

[@stdlib/array/uint8c]: https://github.com/stdlib-js/array-uint8c/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
