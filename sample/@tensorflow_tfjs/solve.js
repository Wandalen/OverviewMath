const tf = require( '@tensorflow/tfjs-node' );
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

tf.linalg.solve( M, b, false );
