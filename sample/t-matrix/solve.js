const Matrix = require( 't-matrix' );
const _ = require( 'wTools' );
require( 'wmathmatrix' );
require( 'wFiles' );
require( 'wequaler' );

const createMatrix = require( '../../proto/CreateMatrix' );

var data = _.fileProvider.fileRead( {
  filePath : `${__dirname}/../../data/System1000.json`,
  encoding : 'json',
} );

const M = createMatrix( data.M );
// console.log(M);
const x = data.x;
console.log( x );
let b = data.b;
// console.log(b);

const xResult = Matrix.ldiv( M, b );
console.log( xResult.toJSON() );

// const dims = Math.sqrt( data.M.length );
// const M = _.Matrix({
//   buffer : data.M,
//   dims : [ dims, dims ],
//   inputRowMajor : 0,
// })

// const x = _.Matrix.Make([ data.x.length, 1 ]).copy(data.x);
// const b = _.Matrix.Make([ data.b.length, 1 ]).copy(data.b);
// console.log(M, x, b);

// const result = _.Matrix.Mul( null, [ M, x ] );
// console.log(_.equivalent( result, b ));
