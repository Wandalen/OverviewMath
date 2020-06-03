const solve = require( 'ndarray-linear-solve' );
const ndarray = require( 'ndarray' );
const _ = require( 'wTools' );
require( 'wFiles' );
require( 'wequaler' );

var data = _.fileProvider.fileRead
( {
  filePath : `${__dirname}/../../data/System100.json`,
  encoding : 'json',
} );

var M = ndarray( data.M, [ 100, 100 ] );
// console.log( 'vector M: ', M.data );
const x = data.x;
console.log( 'vector x: ', x );
let b = ndarray( data.b );
// console.log( 'vector b: ', b.data );

let xResult = ndarray( new Array( 100 ) );
var r = solve( xResult, M, b );

if( r )
console.log( 'vector x result: ', xResult.data );
else
console.log( 'matrix is singular' );

console.log( 'is equal: ', _.equivalent( xResult.data, x, { accuracy : 0.001 } ) ); // true
