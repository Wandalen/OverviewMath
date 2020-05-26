
'use strict';

const _ = require( 'wTools' );
require( 'wFiles' );
require( 'wnpmtools' );

const generalPurposeData = _.fileProvider.fileRead
( {
  filePath : abs( '../data/GeneralPurpose.yml' ),
  encoding : 'yaml'
} );

const symbolicExpressionData = _.fileProvider.fileRead
( {
  filePath : abs( '../data/SymbolicExpression.yml' ),
  encoding : 'yaml'
} );

const specialData = _.fileProvider.fileRead
( {
  filePath : abs( '../data/Special.yml' ),
  encoding : 'yaml'
} );

const tables = [ generalPurposeData, symbolicExpressionData, specialData ];

console.log( `Loading data, wait... ` );

tables.forEach( ( table ) =>
{
  updateTable( table );
} );

function updateTable( table )
{
  let step = 0;
    for( let i = 0; i < table.length; i++ )
    {
      step += 300;
      setTimeout( () =>
      {
        _.npm.dependantsRertive( { remotePath : table[ i ].npmName } )
        .then( ( dependants ) =>
        {
            if( isNaN( dependants ) )
            table[ i ].dependants = '-';
            else
            table[ i ].dependants = dependants;

            writeData();
            return null;
        } )
      }, step )
    }
}

function writeData()
{
  _.fileProvider.fileWrite
  ( {
    filePath : abs( '../data/GeneralPurpose.yml' ),
    data : tables[ 0 ],
    encoding : 'yaml',
  } );

  _.fileProvider.fileWrite
  ( {
    filePath : abs( '../data/SymbolicExpression.yml' ),
    data : tables[ 1 ],
    encoding : 'yaml',
  } );

  _.fileProvider.fileWrite
  ( {
    filePath : abs( '../data/Special.yml' ),
    data : tables[ 2 ],
    encoding : 'yaml',
  } );
}

function abs() { return _.path.s.join( __dirname, ... arguments ) }
