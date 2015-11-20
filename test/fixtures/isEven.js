'use strict';

/**
* FUNCTION: isEven( x )
*	Checks whether a function is an even number
*
* @param {Number} x - input value
* @returns {Boolean} true if x passes the test, false otherwise
*/
function isEven( x ) {
	return x % 2 === 0;
} // end FUNCTION isEven()


// EXPORTS //

module.exports = isEven;
