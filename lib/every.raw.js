'use strict';

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
	var res = true,
		len = arr.length,
		i;

	for ( i = 0; i < len; i++ ) {
		if ( fcn( arr[ i ] ) === false ) {
			res = false;
		}
	}
	return res;
} // end FUNCTION every()


// EXPORTS //

module.exports = every;
