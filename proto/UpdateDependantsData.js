( function ()
{
  'use strict';

  const _ = require( 'wTools' );
  require( 'wFiles' );
  require( 'wnpmtools' );

  function abs() { return _.path.s.join( __dirname, ... arguments ) }

  const generalPurposeData = _.fileProvider.fileRead(
  {
    filePath : abs( '../data/GeneralPurpose.yml' ),
    encoding : 'yaml'
  }
  );

  const symbolicExpressionData = _.fileProvider.fileRead(
  {
    filePath : abs( '../data/SymbolicExpression.yml' ),
    encoding : 'yaml'
  }
  );

  const specialData = _.fileProvider.fileRead(
  {
    filePath : abs( '../data/Special.yml' ),
    encoding : 'yaml'
  }
  );

  const tables = [ generalPurposeData, symbolicExpressionData, specialData ];

  tables.forEach( ( table ) =>
  {
    table.forEach( async ( lib ) =>
    {
      try
      {
        const dependants = await _.npm.dependantsRertive( lib.npmName );
        if ( isNaN( dependants ) )
        lib.dependants = '-';
        else
        lib.dependants = dependants;
      }
      catch( error )
      {
        console.log( error );
        lib.dependants = '-';
      }
    } )
  } );

  _.fileProvider.fileWrite(
    {
    filePath : abs( '../data/GeneralPurpose.yml' ),
    data : tables[ 0 ],
    encoding : 'yaml',
  }
  );

  _.fileProvider.fileWrite(
    {
    filePath : abs( '../data/SymbolicExpression.yml' ),
    data : tables[ 1 ],
    encoding : 'yaml',
  }
  );

  _.fileProvider.fileWrite(
    {
    filePath : abs( '../data/Special.yml' ),
    data : tables[ 2 ],
    encoding : 'yaml',
  }
  );
} )();
