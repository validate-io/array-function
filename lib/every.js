'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' ),
	isArrayLike = require( 'validate.io-array-like' );


// EVERY //

/**
* FUNCTION: every( fcn, array )
*	Validates each array element.
*
* @param {Function} fcn - function to test for each element
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} array - input array
* @returns {Boolean} true if all elements pass the test, false otherwise
*/
function every( fcn, arr ) {
	/* jshint newcap:false */
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a function. Value: `' + fcn + '`.' );
	}
	if ( !isArrayLike( arr ) ) {
		throw new TypeError( 'invalid input argument. Second argument must be an array or typed array. Value: `' + arr + '`.' );
	}
	var ret = true,
		len = arr.length,
		i;

	for ( i = 0; i < len; i++ ) {
		if ( fcn( arr[ i ] ) === false ) {
			ret = false;
		}
	}
	return ret;
} // end FUNCTION every()


// EXPORTS //

module.exports = every;
