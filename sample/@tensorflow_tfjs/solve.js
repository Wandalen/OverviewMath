// Load the binding
const tf = require( '@tensorflow/tfjs-node' );
const _ = require( 'wTools' );
require( 'wFiles' );
require( 'wequaler' );
// https://js.tensorflow.org/api/latest  -  javascript api link

var data = _.fileProvider.fileRead( {
  filePath : `${__dirname}/../../data/System100.json`,
  encoding : 'json',
} );

const M = tf.tensor2d( createMatrix( data.M ) );
const x = tf.tensor1d( data.x );
const b = tf.tensor1d( data.b );

const bResult = tf.dot( x, M );
b.print();
bResult.print();

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
