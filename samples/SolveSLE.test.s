( function _SolveSLE_test_s_() {

'use strict';

/*
*/

if( typeof module !== 'undefined' )
{

  let _ = require( 'wTools' );

  _.include( 'wTesting' );
  _.include( 'wFiles' );
  _.include( 'wappbasic' );

}

//

var _ = _global_.wTools;

// --
// test
// --

function sample( test )
{
  let self = this;
  let filter = { filePath : _.fileProvider.path.join( __dirname, './solveSLE/**/*.(s|js)' ) };
  let found = _.fileProvider.filesFind
  ({
    filter,
    mode : 'distinct',
    mandatory : 0,
  });

  let ready = _.Consequence().take( null );
  let start = _.process.starter
  ({
    currentPath : _.fileProvider.path.join( __dirname, './solveSLE' ),
    outputCollecting : 1,
    throwingExitCode : 1,
    outputGraying : 1,
    ready,
    mode : 'fork',
  })
  let startNotThrowing = _.process.starter
  ({
    currentPath : _.fileProvider.path.join( __dirname, './solveSLE' ),
    outputCollecting : 1,
    throwingExitCode : 0,
    outputGraying : 1,
    ready,
    mode : 'fork',
  })

  /* */

  let startTime, spentTime;

  for( let i = 0 ; i < found.length ; i++ )
  {
    if( found[ i ].exts[ 0 ] === 'browser' )
    continue;

    ready
    .then( () =>
    {
      test.case = found[ i ].relative;
      startTime = _.time.now();
      return null;
    })

    if( found[ i ].exts[ 0 ] !== 'throwing' )
    {
      start({ execPath : found[ i ].relative })
      .then( ( got ) =>
      {
        spentTime = _.time.spent( startTime );
        console.log( spentTime );

        test.identical( got.exitCode, 0 );
        test.identical( _.strCount( got.output, 'ncaught' ), 0 );
        test.identical( _.strCount( got.output, 'rror' ), 0 );
        return null;
      })
    }
    else
    {
      startNotThrowing({ execPath : found[ i ].relative })
      .then( ( got ) =>
      {
        spentTime = _.time.spent( startTime );
        console.log( spentTime );

        test.notIdentical( got.exitCode, 0 );
        test.ge( _.strCount( got.output, 'ncaught' ), 1 );
        test.ge( _.strCount( got.output, 'rror' ), 1 );
        return null;
      })
    }
  }

  /* */

  return ready;
}

sample.timeOut = 60000;

// --
// declare
// --

var Self =
{

  name : 'AvesomeMath.Sample',
  silencing : 1,
  enabled : 1,

  tests :
  {
    sample,
  },

}

//

Self = wTestSuite( Self );
if( typeof module !== 'undefined' && !module.parent )
_global_.wTester.test( Self.name );

})();
