'use strict';

var validateArray = require( './../lib' );

var arr1, arr2,
	out,
	i;

arr1 = new Array( 25 );
for ( i = 0; i < arr1.length; i++ ) {
	arr1[ i ] = i;
}

arr2 = new Array( 25 );
for ( i = 0; i < arr2.length; i++ ) {
	arr2[ i ] = 2 * i;
}

function isEven( x ) {
	return ( typeof x === 'number' && x % 2 === 0 );
}

out = validateArray( isEven, arr1 );
console.log( out );

out = validateArray( isEven, arr2 );
console.log( out );
