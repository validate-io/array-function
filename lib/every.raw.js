'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );


// EVERY //

/**
* FUNCTION: every( fcn, value )
*	Validates each array element.
*
* @param {Function} fcn - function to apply
* @param {*} value - value to be validated
* @returns {Boolean} true if value is an array for which all elements pass, false otherwise
*/
function every( fcn, value ) {
	if ( !isArray( value ) ) {
		return false;
	}
	var len = value.length,
		i;
	if ( !len ) {
		return false;
	}
	for ( i = 0; i < len; i++ ) {
		if ( fcn( value[ i ] ) === false ) {
			return false;
		}
	}
	return true;
} // end FUNCTION every()


// EXPORTS //

module.exports = every;
