const solve = require( 'ndarray-linear-solve' );
const show = require( 'ndarray-show' );
const ndarray = require( 'ndarray' );
const _ = require( 'wTools' );
require( 'wmathmatrix' );
require( 'wFiles' );
require( 'wequaler' );

var data = _.fileProvider.fileRead( {
 filePath : `${__dirname}/../../data/System1000.json`,
 encoding : 'json',
} );

const M = ndarray( data.M, [ 100, 100 ] );
// console.log( M );
const x = data.x;
console.log( x );
let b = ndarray( data.b );
// console.log( b );


debugger;
const xResult = ndarray( new Float64Array( 100 ) );
const r = solve( xResult, M, b );

if ( r )
{
 console.log( 'solution:\n' + show( xResult ) );
}
else
{
 console.log( 'matrix is singular' )
}
