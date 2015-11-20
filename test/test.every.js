/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	noop = require( '@kgryte/noop' ),
	isEven = require( './fixtures/isEven.js' ),
	every = require( './../lib/every.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'every', function tests() {

	it( 'should export a function', function test() {
		expect( every ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a function', function test() {
		var values = [
			'5',
			5,
			NaN,
			true,
			null,
			undefined,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				every( value, [1,2,3] );
			};
		}
	});

	it( 'should return false if not provided an input array', function test() {
		var values = [
			'5',
			5,
			NaN,
			true,
			null,
			undefined,
			new Int32Array([2,4,6]),
			{},
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.strictEqual( every( noop, values[ i ] ), false );
		}
	});

	it( 'should return false for an empty array', function test() {
		assert.strictEqual( every( noop, [] ), false );
	});

	it( 'should validate elements of an array', function test() {
		var arr,
			out;

		arr = [ 1, 1, 2, 4 ];

		out = every( isEven, arr );
		assert.deepEqual( out, false );

		arr = [ 2, 2, 2, 4 ];

		out = every( isEven, arr );
		assert.deepEqual( out, true );
	});

});
