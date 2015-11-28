'use strict';

/**
* FUNCTION: isEven( x )
*	Checks whether an input value is an even number
*
* @param {*} x - input value
* @returns {Boolean} true if x passes the test, false otherwise
*/
function isEven( x ) {
	return ( typeof x === 'number' && x % 2 === 0 );
} // end FUNCTION isEven()


// EXPORTS //

module.exports = isEven;
