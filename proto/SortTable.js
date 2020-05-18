function sortTable( tableData, sortingOrder )
{
  'use strict';

  const _ = require( 'wTools' );
  require( 'warraysorted' );

  const sortedByDependants = [];

  for( let i = 0 ; i < tableData.length ; i++ )
  _.sorted.add( sortedByDependants, tableData[ i ], ( lib ) => lib.dependants );

  sortedByDependants.reverse();

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

  const sorted = [];

  const booleanColumns = sortingOrder.filter( ( column ) => column.dataType === 'boolean' );
  const cycles = booleanColumns.length;

  for ( let i = 0; i < cycles; i++ )
  {
    sortedByDependants.forEach( ( lib, idx ) =>
      {
        let passes = true;

        booleanColumns.forEach( ( column ) =>
        {
          if ( !lib[ column.dataTitle ] )
          passes = false;
        } )

        if ( passes )
        {
          sorted.push( lib );
          sortedByDependants.splice( idx, 1 );
        }
      } )

    booleanColumns.pop();
  }

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

  return [ ... sorted, ... sortedByDependants ];
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
