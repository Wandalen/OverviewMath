function sortTable( tableData, columns )
{
  'use strict';

  const _ = require( 'wTools' );
  require( 'warraysorted' );

  // let dataCopy = [ ... data ];
  // let sortedData = [];

  // for( let i = 0; i < columns.length; i++ )
  // {
  //   if( i === 1 )
  //   {
  //     if( columns[ i ].dataType === 'number' )
  //     {
  //       for( let j = 0 ; j < data.length ; j++ )
  //       _.sorted.add( sortedData, data[ j ], ( lib ) => lib.dependants !== '-' ? lib.dependants : 0 );

  //       sortedData.reverse();
  //       break;
  //     }
  //     else
  //     {
  //       sortedData = data.sort( compare )
  //     }
  //   }
  // }

  // function compare( lib1, lib2 )
  // {
  //   if( lib1[ columns[ i ].dataTitle ] && !lib2[ columns[ i ].dataTitle ] )
  //   return -1;

  //   if( !lib1[ columns[ i ].dataTitle ] && lib2[ columns[ i ].dataTitle ] )
  //   return 1;

  //   return 0;
  // }

  // return sortedData;

  let temp1 = [];
  let temp2 = [];
  let sortedData = [];

  for( let i = 0 ; i < tableData.length ; i++ )
  _.sorted.add( sortedData, tableData[ i ], ( lib ) =>
  {
    return lib.dependants !== '-' ? lib.dependants : 0;
  } );

  sortedData.reverse();

  for( let i = 0; i < columns.length; i++ )
  {
    if( i === 1 )
    {
      if( columns[ i ].dataType === 'number' )
      {
        break;
      }
      else
      {
        const trueLibs = tableData.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        const falseLibs = tableData.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );
        sortedData = [ ... trueLibs, ... falseLibs ];
      }
    }
    else if( i === 2 )
    {
      if( columns[ i ].dataType === 'number' )
      {
        break;
      }
      else
      {
        let trueLibs = sortedData.filter( ( lib ) => lib[ columns[ i - 1 ].dataTitle ] );
        let falseLibs = sortedData.filter( ( lib ) => !lib[ columns[ i - 1 ].dataTitle ] );

        temp1 = trueLibs.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = trueLibs.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        trueLibs = [ ... temp1, ... temp2 ];

        temp1 = falseLibs.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = falseLibs.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        falseLibs = [ ... temp1, ... temp2 ];

        sortedData = [ ... trueLibs, ... falseLibs ];
      }
    }
    else if( i === 3 )
    {
      if( columns[ i ].dataType === 'number' )
      {
        break;
      }
      else
      {
        let trueTrue = sortedData.filter( ( lib ) =>
        {
          if( lib[ columns[ i - 1 ].dataTitle ] && lib[ columns[ i - 2 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        let trueFalse = sortedData.filter( ( lib ) =>
        {
          if( !lib[ columns[ i - 1 ].dataTitle ] && lib[ columns[ i - 2 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        let falseTrue = sortedData.filter( ( lib ) =>
        {
          if( lib[ columns[ i - 1 ].dataTitle ] && !lib[ columns[ i - 2 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        let falseFalse = sortedData.filter( ( lib ) =>
        {
          if( !lib[ columns[ i - 1 ].dataTitle ] && !lib[ columns[ i - 2 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        temp1 = trueTrue.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = trueTrue.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        trueTrue = [ ... temp1, ... temp2 ];

        temp1 = trueFalse.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = trueFalse.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        trueFalse = [ ... temp1, ... temp2 ];

        temp1 = falseTrue.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = falseTrue.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        falseTrue = [ ... temp1, ... temp2 ];

        temp1 = falseFalse.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = falseFalse.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        falseFalse = [ ... temp1, ... temp2 ];

        sortedData = [ ... trueTrue, ... trueFalse, ... falseTrue, ... falseFalse ];
      }
    }
    else if( i === 4 )
    {
      if( columns[ i ].dataType === 'number' )
      {
        break;
      }
      else
      {
        let trueTrueTrue = sortedData.filter( ( lib ) =>
        {
          if( lib[ columns[ i - 1 ].dataTitle ] && lib[ columns[ i - 2 ].dataTitle ] && lib[ columns[ i - 3 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        let trueTrueFalse = sortedData.filter( ( lib ) =>
        {
          if( lib[ !columns[ i - 1 ].dataTitle ] && lib[ columns[ i - 2 ].dataTitle ] && lib[ columns[ i - 2 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        let trueFalseTrue = sortedData.filter( ( lib ) =>
        {
          if( lib[ columns[ i - 1 ].dataTitle ] && !lib[ columns[ i - 2 ].dataTitle ] && lib[ columns[ i - 2 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        let trueFalseFalse = sortedData.filter( ( lib ) =>
        {
          if( lib[ !columns[ i - 1 ].dataTitle ] && !lib[ columns[ i - 2 ].dataTitle ] && lib[ columns[ i - 2 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        temp1 = trueTrueTrue.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = trueTrueTrue.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        trueTrueTrue = [ ... temp1, ... temp2 ];

        temp1 = trueTrueFalse.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = trueTrueFalse.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        trueTrueFalse = [ ... temp1, ... temp2 ];

        temp1 = trueFalseTrue.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = trueFalseTrue.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        trueFalseTrue = [ ... temp1, ... temp2 ];

        temp1 = trueFalseFalse.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = trueFalseFalse.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        trueFalseFalse = [ ... temp1, ... temp2 ];

        let falseTrueTrue = sortedData.filter( ( lib ) =>
        {
          if( lib[ columns[ i - 1 ].dataTitle ] && lib[ columns[ i - 2 ].dataTitle ] && !lib[ columns[ i - 3 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        let falseTrueFalse = sortedData.filter( ( lib ) =>
        {
          if( !lib[ columns[ i - 1 ].dataTitle ] && lib[ columns[ i - 2 ].dataTitle ] && !lib[ columns[ i - 2 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        let falseFalseTrue = sortedData.filter( ( lib ) =>
        {
          if( lib[ columns[ i - 1 ].dataTitle ] && !lib[ columns[ i - 2 ].dataTitle ] && !lib[ columns[ i - 2 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        let falseFalseFalse = sortedData.filter( ( lib ) =>
        {
          if( !lib[ columns[ i - 1 ].dataTitle ] && !lib[ columns[ i - 2 ].dataTitle ] && !lib[ columns[ i - 2 ].dataTitle ] )
          return true;
          else
          return false;
        } );

        temp1 = falseTrueTrue.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = falseTrueTrue.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        falseTrueTrue = [ ... temp1, ... temp2 ];

        temp1 = falseTrueFalse.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = falseTrueFalse.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        falseTrueFalse = [ ... temp1, ... temp2 ];

        temp1 = falseFalseTrue.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = falseFalseTrue.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        falseFalseTrue = [ ... temp1, ... temp2 ];

        temp1 = falseFalseFalse.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = falseFalseFalse.filter( ( lib ) => !lib[ columns[ i ].dataTitle ] );

        falseFalseFalse = [ ... temp1, ... temp2 ];


        sortedData = [
          ... trueTrueTrue, ... trueTrueFalse, ... trueFalseTrue, ... trueFalseFalse,
          ... falseTrueTrue, ... falseTrueFalse, ... falseFalseTrue, ... falseFalseFalse
        ];
      }
    }
    else
    {

    }
  }

  return sortedData;
}

module.exports = sortTable;
