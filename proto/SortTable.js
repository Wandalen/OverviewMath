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

  for ( let i = 0; i < sortingOrder.length; i++ )
  {
    if ( sortingOrder[ i ].dataTitle !== 'npmName' )
    {
      if ( typeof sortingOrder[ i ].dataType === 'boolean' )
      {

      }
    }
  }

  return sortedByDependants;
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
