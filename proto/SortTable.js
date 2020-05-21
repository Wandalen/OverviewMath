function sortTable( tableData, columns )
{
  'use strict';

  const _ = require( 'wTools' );
  require( 'warraysorted' );

  let sortedData = [];
  let temp1 = [];
  let temp2 = [];

  for( let i = 0 ; i < tableData.length ; i++ )
  _.sorted.add( sortedData, tableData[ i ], ( lib ) =>
  {
    return lib.dependants !== '-' ? lib.dependants : 0;
  } );

  sortedData.reverse();

  for ( let i = 0; i < columns.length; i++ )
  {
    if ( i === 1 )
    {
      if ( columns[ i ].dataType === 'number' )
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
    else if ( i === 2 )
    {
      if ( columns[ i ].dataType === 'number' )
      {

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
    else if ( i === 3 )
    {
      if ( columns[ i ].dataType === 'number' )
      {
        break;
      }
      else
      {
        let trueTrue = sortedData.filter( ( lib ) =>
        {
          if ( lib[ columns[ i - 1 ] ].dataTitle && lib[ columns[ i - 2 ] ].dataTitle )
          return true;
          else
          return false;
        } );

        let trueFalse = sortedData.filter( ( lib ) =>
        {
          if ( !lib[ columns[ i - 1 ] ].dataTitle && lib[ columns[ i - 2 ] ].dataTitle )
          return true;
          else
          return false;
        } );

        let falseTrue = sortedData.filter( ( lib ) =>
        {
          if ( lib[ columns[ i - 1 ] ].dataTitle && !lib[ columns[ i - 2 ] ].dataTitle )
          return true;
          else
          return false;
        } );

        let falseFalse = sortedData.filter( ( lib ) =>
        {
          if ( !lib[ columns[ i - 1 ] ].dataTitle && !lib[ columns[ i - 2 ] ].dataTitle )
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
    else if ( i === 4 )
    {
      if ( columns[ i ].dataType === 'number' )
      {
        break;
      }
      else
      {
        let trueTrueTrue = sortedData.filter( ( lib ) =>
        {
          if ( lib[ columns[ i - 1 ] ].dataTitle && lib[ columns[ i - 2 ] ].dataTitle && lib[ columns[ i - 3 ] ].dataTitle )
          return true;
          else
          return false;
        } );

        let trueTrueFalse = sortedData.filter( ( lib ) =>
        {
          if ( lib[ columns[ i - 1 ] ].dataTitle && lib[ columns[ i - 2 ] ].dataTitle && !lib[ columns[ i - 2 ] ].dataTitle )
          return true;
          else
          return false;
        } );

        let trueFalseTrue = sortedData.filter( ( lib ) =>
        {
          if ( lib[ columns[ i - 1 ] ].dataTitle && !lib[ columns[ i - 2 ] ].dataTitle && lib[ columns[ i - 2 ] ].dataTitle )
          return true;
          else
          return false;
        } );

        let trueFalseFalse = sortedData.filter( ( lib ) =>
        {
          if ( lib[ columns[ i - 1 ] ].dataTitle && !lib[ columns[ i - 2 ] ].dataTitle && !lib[ columns[ i - 2 ] ].dataTitle )
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
          if ( !lib[ columns[ i - 1 ] ].dataTitle && lib[ columns[ i - 2 ] ].dataTitle && lib[ columns[ i - 3 ] ].dataTitle )
          return true;
          else
          return false;
        } );

        let falseTrueFalse = sortedData.filter( ( lib ) =>
        {
          if ( !lib[ columns[ i - 1 ] ].dataTitle && lib[ columns[ i - 2 ] ].dataTitle && !lib[ columns[ i - 2 ] ].dataTitle )
          return true;
          else
          return false;
        } );

        let falseFalseTrue = sortedData.filter( ( lib ) =>
        {
          if ( !lib[ columns[ i - 1 ] ].dataTitle && !lib[ columns[ i - 2 ] ].dataTitle && lib[ columns[ i - 2 ] ].dataTitle )
          return true;
          else
          return false;
        } );

        let falseFalseFalse = sortedData.filter( ( lib ) =>
        {
          if ( !lib[ columns[ i - 1 ] ].dataTitle && !lib[ columns[ i - 2 ] ].dataTitle && !lib[ columns[ i - 2 ] ].dataTitle )
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
    // else
    // {

    // }

    return sortedData
  }


  // const sortedByDependants = [];

  // for( let i = 0 ; i < tableData.length ; i++ )
  // _.sorted.add( sortedByDependants, tableData[ i ], ( lib ) => lib.dependants );

  // sortedByDependants.reverse();

  // const tableDataCopy = [ ... tableData ];

  // for ( let i = 0; i < sortingOrder.length; i++ )
  // {
  //   if ( sortingOrder[ i ].dataTitle !== 'npmName' )
  //   {
  //     if ( typeof sortingOrder[ i ].dataType === 'boolean' )
  //     {
  //     }
  //   }
  // }

  // const sorted = [];

  // const booleanColumns = sortingOrder.filter( ( column ) => column.dataType === 'boolean' );
  // const cycles = booleanColumns.length;

  // for ( let i = 0; i < cycles; i++ )
  // {
  //   sortedByDependants.forEach( ( lib, idx ) =>
  //     {
  //       let passes = true;

  //       booleanColumns.forEach( ( column ) =>
  //       {
  //         if ( !lib[ column.dataTitle ] )
  //         passes = false;
  //       } )

  //       if ( passes )
  //       {
  //         sorted.push( lib );
  //         sortedByDependants.splice( idx, 1 );
  //       }
  //     } )

  //   booleanColumns.pop();
  // }

  // sorted.push( ... sortedByDependants.filter( ( lib ) =>
  // {

  // } ) )

  // const temp = sortedByDependants.filter( ( lib ) =>
  // {
  //   let flag = true;

  //   booleanColumns.forEach( ( column ) =>
  //   {

  //   } )

  //   return flag;
  // } )

  // return [ ... sorted, ... sortedByDependants ];
  // let sortedData = [];
  // for( let i = 0 ; i < tableData.length ; i++ )
  // _.sorted.add( sortedData, tableData[ i ], ( lib ) => lib.dependents );

  // sortedData.reverse();

  // const bindingAndSolvingSLE = sortedData.filter( ( lib ) =>
  // {
  //   if ( lib.binding && lib.solvesSLE )
  //   return lib;
  // } );

  // const onlyBinding = sortedData.filter( ( lib ) =>
  // {
  //   if ( lib.binding && !lib.solvesSLE )
  //   return lib;
  // } );

  // const onlySolvingSLE = sortedData.filter( ( lib ) =>
  // {
  //   if ( !lib.binding && lib.solvesSLE )
  //   return lib;
  // } );

  // const other = sortedData.filter( ( lib ) =>
  // {
  //   if ( !lib.binding && !lib.solvesSLE )
  //   return lib;
  // } );

  // return [ ... bindingAndSolvingSLE, ... onlyBinding, ... onlySolvingSLE, ... other ];
}

module.exports = sortTable;
