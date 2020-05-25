function sortTable( data, columns )
{
  'use strict';

  const _ = require( 'wTools' );
  require( 'warraysorted' );

  data.sort( compare );

  function compare( lib1, lib2 )
  {
    let result;
    for( let i = 1; i < columns.length; i++ )
    {
      if( columns[ i ].dataType === 'boolean' )
      {
        if( lib1[ columns[ i ].dataTitle ] && !lib2[ columns[ i ].dataTitle ] )
        {
          result = -1;
          break;
        }
        else if( !lib1[ columns[ i ].dataTitle ] && lib2[ columns[ i ].dataTitle ] )
        {
          result = 1;
          break;
        }
        else
        {
          result = 0;
        }
      }
      else
      {
        result = lib2.dependants - lib1.dependants;
        break;
      }
    }
    return result;
  }

  return data;
}

module.exports = sortTable;
