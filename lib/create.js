/* jshint evil:true */
'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );


// CREATE //

/**
* FUNCTION: create( fcn )
*	Returns a function for validating whether an input is an array for which all elements pass a test function.
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
	f = 'return function validate( v ){';

	// Create the function body...

	// Create internal variables...
	// => var len, i;
	f += 'var len,i;';

	// Return false if input argument is not an array...
	f += 'if( !Array.isArray( v ) ) {';
		f += 'return false;';
	f += '}';
	f += 'len = v.length;';

	// Return false if provided an empty array...
	f += 'if(!len){';
		f += 'return false;';
	f += '}';

	// Test each array element...
	f += 'for(i=0;i<len;i++){';
	f += 'if (!validate._f(v[i]))';
		f += '{';
			f += 'return false;';
		f += '}';
	f += '}';
	/*
		for ( i = 0; i < len; i++ ) {
			if (!validate._f(v[i])) {
				// Return false if test is violated for at least one element:
				return false;
			}
		}
	*/
	// Otherwise, return true:
	f += 'return true;';

	// Close the function:
	f += '};';

	// Create the function in the global scope...
	f = ( new Function( f ) )();

	// Bind the test function to the created function so it may be referenced during invocation...
	f._f = fcn;
	return f;
	/*
		function validate( v ) {
			var len,
				i;

			if ( !Array.isArray( v ) ) {
				return false;
			}
			len = v.length;
			for ( i = 0; i < len; i++ ) {
				if ( !validate._f( v[i] ) ) {
					return false;
				}
			}
			return true;
		}
	*/
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
