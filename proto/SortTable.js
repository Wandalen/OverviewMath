function sortTable( tableData, columns )
{
  'use strict';

  const _ = require( 'wTools' );
  require( 'warraysorted' );

  let sortedData = [];

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

        let temp1 = trueLibs.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        let temp2 = trueLibs.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );

        trueLibs = [ ... temp1, ... temp2 ];

        temp1 = falseLibs.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        temp2 = falseLibs.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );

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
        const trueTrue = sortedData.filter( ( lib ) =>
        {
          if ( lib[ columns[ i - 1 ].dataTitle && lib[ columns[ i - 2 ].dataTitle ] ] )
          return true;
          else
          return false;
        } );

        const trueFalse = sortedData.filter( ( lib ) =>
        {
          if ( !lib[ columns[ i - 1 ].dataTitle && lib[ columns[ i - 2 ].dataTitle ] ] )
          return true;
          else
          return false;
        } );

        const falseTrue = sortedData.filter( ( lib ) =>
        {
          if ( lib[ columns[ i - 1 ].dataTitle && !lib[ columns[ i - 2 ].dataTitle ] ] )
          return true;
          else
          return false;
        } );

        const falseFalse = sortedData.filter( ( lib ) =>
        {
          if ( !lib[ columns[ i - 1 ].dataTitle && !lib[ columns[ i - 2 ].dataTitle ] ] )
          return true;
          else
          return false;
        } );

        // let temp1 = trueLibs.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        // let temp2 = trueLibs.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );

        // trueLibs = [ ... temp1, ... temp2 ];

        // temp1 = falseLibs.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );
        // temp2 = falseLibs.filter( ( lib ) => lib[ columns[ i ].dataTitle ] );

        // falseLibs = [ ... temp1, ... temp2 ];

        sortedData = [ ... trueLibs, ... falseLibs ];
      }
    }
    else if ( i === 4 )
    {

    }
    else
    {

    }
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
