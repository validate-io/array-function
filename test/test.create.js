/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	noop = require( '@kgryte/noop' ),
	isEven = require( './fixtures/isEven.js' ),
	create = require( './../lib/create.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'create apply', function tests() {

	it( 'should export a function', function test() {
		expect( create ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a test function argument which is not a function', function test() {
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
				create( value );
			};
		}
	});

	it( 'should return a function', function test() {
		var validate;

		validate = create( isEven );
		expect( validate ).to.be.a( 'function' );

		validate = create( noop );
		expect( validate ).to.be.a( 'function' );
	});

	it( 'should validate an array', function test() {
		var validate,
			actual,
			arr,
			out;

		validate = create( isEven );

		arr = [ 2, 2, 2, 2 ];
		out = true;

		actual = validate( arr );

		assert.strictEqual( actual, out );
		assert.strictEqual( out, true );

		arr = [ 2, 2, 2, 3 ];
		out = false;

		actual = validate( arr );

		assert.strictEqual( actual, out );
		assert.strictEqual( out, false );
	});

	it( 'should return a function which returns false if provided an empty array', function test() {
		var validate,
			actual;

		validate = create( isEven );
		actual = validate( [] );
		assert.strictEqual( actual, false );
	});

	it( 'should return a function which returns false if not supplied an array', function test() {
		var isEvenArray = create( isEven );

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
			assert.strictEqual( isEvenArray( values[ i ] ), false );
		}
	});

});
