/* jshint evil:true */
'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );


// CREATE //

/**
* FUNCTION: create( fcn )
*	Returns a function for validating each array element.
*
* @param {Function} fcn - function to test for each element
* @returns {Function} validation function
*/
function create( fcn ) {
	var f;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid input argument. Must provide a function to test for each array element. Value: `' + fcn + '`.' );
	}
	
	// Code generation. Start with the function definition...
	f = 'return function validate( a ){';

	// Create the function body...

	// Create internal variables...
	// => var len, i, ret;
	f += 'var len = a.length,i,ret;';

	// Test each array element...
	f += 'ret=true;';
	f += 'for(i=0;i<len;i++){';
	f += 'if (!validate._f(a[i]))';
		f += '{';
			f += 'ret = false;';
		f += '}';
	f += '}';
	/*
		for ( i = 0; i < len; i++ ) {
			if (!validate._f(a[i])) {
				ret = false;
			}
		}
	*/

	// Return the result...
	f += 'return ret;';

	// Close the function:
	f += '};';

	// Create the function in the global scope...
	f = ( new Function( f ) )();

	// Bind the test function to the created function so it may be referenced during invocation...
	f._f = fcn;
	return f;
	/*
		function validate( a ) {
			var len,
				i,
				ret;

			len = o.length;
			for ( i = 0; i < len; i++ ) {
				if (!validate._f(a[i])) {
					ret = false;
				}
			}
			return ret;
		}
	*/
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
