const Matrix = require( 't-matrix' );
const _ = require( 'wTools' );
require( 'wFiles' );
require( 'wequaler' );

var data = _.fileProvider.fileRead( {
  filePath : `${__dirname}/../../data/System100.json`,
  encoding : 'json',
} );

const M = createMatrix( data.M );
// console.log(M);
const x = data.x;
console.log( 'vector x: ', x );
let b = data.b;
// console.log( 'vector b: ', b );

let xResult = Matrix.ldiv( M, b );
console.log( 'vector x result: ', [ ... xResult ] ); // result is the same as ubique

console.log( 'is equal: ', _.equivalent( [ ... xResult ], x ) ); // false ?

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
