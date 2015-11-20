'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' ),
	isArray = require( 'validate.io-array' );


// EVERY //

/**
* FUNCTION: every( fcn, value )
*	Validates each array element.
*
* @param {Function} fcn - function to test for each element
* @param {*} value - value to be validated
* @returns {Boolean} true if value is an array for which all elements pass the test, false otherwise
*/
function every( fcn, value ) {
	/* jshint newcap:false */
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a function. Value: `' + fcn + '`.' );
	}
	if ( !isArray( value ) ) {
		return false;
	}
	var len = value.length,
		i;

	for ( i = 0; i < len; i++ ) {
		if ( fcn( value[ i ] ) === false ) {
			return false;
		}
	}
	return true;
} // end FUNCTION every()


// EXPORTS //

module.exports = every;
