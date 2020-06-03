'use strict';

const _ = require( 'wTools' );
require( 'wFiles' );
require( 'wnpmtools' );

const tables = [ 'GeneralPurpose', 'SymbolicExpression', 'Special', 'Geometric' ];

tables.forEach( ( table ) => updateDependantsForTable( table ) );

function updateDependantsForTable( dataFileName )
{
  console.log( `Loading data for ${dataFileName} libs, wait... ` );
  const data = _.fileProvider.fileRead
  ( {
    filePath : _.path.s.join( __dirname, `../data/${dataFileName}.yml` ),
    encoding : 'yaml'
  } );

  const npmPackageNames = [];

  data.forEach( ( lib ) => npmPackageNames.push( lib.npmName ) );

  _.npm.dependantsRetrieve( { remotePath : npmPackageNames, attemptLimit : 10 } )
  .then( ( dependants ) =>
  {
    dependants.forEach( ( dependantsNumber, idx ) =>
    {
      data[ idx ].dependants = isNaN( dependantsNumber ) ? '-' : dependantsNumber;
    } )

    _.fileProvider.fileWrite
    ( {
      filePath : _.path.s.join( __dirname, `../data/${dataFileName}.yml` ),
      data,
      encoding : 'yaml',
    } );
    console.log( `${dataFileName} libs dependants updated!` );
    return null;
  } )
  .catch( ( err ) => console.log( err ) );
}
