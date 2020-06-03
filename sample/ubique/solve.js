const ubique = require( 'ubique' );
const _ = require( 'wTools' );
require( 'wFiles' );
require( 'wequaler' );

const transp = ubique.transpose;

var data = _.fileProvider.fileRead( {
  filePath : `${__dirname}/../../data/System100.json`,
  encoding : 'json',
} );

const M = createMatrix( data.M );
// console.log( M );
const x = data.x;
console.log( 'vector x: ', x );
let b = data.b;
// console.log( 'vector b: ', b );

let xResult = ubique.linsolve( M, transp( b ) );
xResult = xResult.map( ( arr ) => arr[ 0 ] );
console.log( 'vector x result: ', xResult ); // result is the same as t-matrix

console.log( 'is equal: ', _.equivalent( xResult, x ) ); // false ?

function createMatrix( arr )
{
  'use strict';

  const rowLength = Math.sqrt( arr.length );
  const matrix = [];

  for( let i = 0; i < arr.length; i += rowLength )
  {
    matrix.push( arr.slice( i, i + rowLength ) )
  }

  return matrix;
}
