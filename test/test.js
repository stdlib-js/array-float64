/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var hasFloat64ArraySupport = require( '@stdlib/assert-has-float64array-support' );
var polyfill = require( './../lib/polyfill.js' );
var ctor = require( './../lib' );


// VARIABLES //

var hasFloat64Arrays = hasFloat64ArraySupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctor, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment supports `Float64Array`, the export is an alias for `Float64Array`', function test( t ) {
	var Foo;

	Foo = proxyquire( './../lib', {
		'@stdlib/assert/has-float64array-support': isTrue,
		'./float64array.js': Mock
	});
	t.strictEqual( Foo, Mock, 'returns builtin' );

	if ( hasFloat64Arrays ) {
		t.strictEqual( ctor, Float64Array, 'is alias' ); // eslint-disable-line stdlib/require-globals
	}

	t.end();

	function Mock() {
		return this;
	}

	function isTrue() {
		return true;
	}
});

tape( 'if an environment does not support `Float64Array`, the export is a polyfill', function test( t ) {
	var Foo;

	Foo = proxyquire( './../lib', {
		'@stdlib/assert/has-float64array-support': isFalse
	});

	t.strictEqual( Foo, polyfill, 'returns polyfill' );
	t.end();

	function isFalse() {
		return false;
	}
});
