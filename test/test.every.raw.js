/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	isEven = require( './fixtures/isEven.js' ),
	every = require( './../lib/every.raw.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'every (raw)', function tests() {

	it( 'should export a function', function test() {
		expect( every ).to.be.a( 'function' );
	});

	it( 'should validate elements of an array', function test() {
		var arr,
			out;

		arr = [ 1, 1, 2, 4 ];

		out = every( isEven, arr );
		assert.deepEqual( out, false );
	});

});
