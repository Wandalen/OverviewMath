'use strict';

const _ = require( 'wTools' );
require( 'wFiles' );
require( 'warraysorted' );

const columns = require( './SortOrder' );

const tables = [ 'GeneralPurpose', 'SymbolicExpression', 'Special', 'Geometric' ];

tables.forEach( ( table ) => sortTableData( table, columns ) );

function sortTableData( dataFileName, columnOrder )
{
  const sortedData = [];

  const data = _.fileProvider.fileRead
  ( {
    filePath : _.path.s.join( __dirname, `../data/${dataFileName}.yml` ),
    encoding : 'yaml',
  } );

  for( let i = 0; i < data.length; i++ )
  _.sorted.add( sortedData, data[ i ], sort )

  _.fileProvider.fileWrite
  ( {
    filePath : _.path.s.join( __dirname, `../data/${dataFileName}.yml` ),
    data : sortedData,
    encoding : 'yaml',
  } );

  function sort( lib1, lib2 )
  {
    let result;
    for( let i = 0; i < columnOrder.length; i++ )
    {
      if( typeof lib1[ columnOrder[ i ] ] === 'boolean' )
      {
        if( lib1[ columnOrder[ i ] ] && !lib2[ columnOrder[ i ] ] )
        {
          result = -1;
          break;
        }
        else if( !lib1[ columnOrder[ i ] ] && lib2[ columnOrder[ i ] ] )
        {
          result = 1;
          break;
        }
        else
        {
          result = 0;
        }
      }
      else if( typeof lib1[ columnOrder[ i ] ] === 'number' )
      {
        if( lib1.dependants === '-' )
        {
          result = 1;
          break;
        }
        else if( lib2.dependants === '-' )
        {
          result = -1;
          break;
        }
        else
        {
          result = lib2.dependants - lib1.dependants;
          break;
        }
      }
    }
    return result;
  }
}

console.log( 'Data is sorted!' );
