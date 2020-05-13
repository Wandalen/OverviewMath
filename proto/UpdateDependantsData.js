(function () {
  'use strict';

  const http = require('http');
  const _ = require( 'wTools' );
  require( 'wFiles' );

  function getPackageDetails(packageName)
  {
    if (!packageName)
    throw _.err( 'Error:', new Error('Need a package name') );

    const url = 'https://replicate.npmjs.com:443/registry/_design/app/_view/dependedUpon?group_level=2&startkey=%5B%22' +
     packageName + '%22%5D&endkey=%5B%22' + packageName + '%22%2C%7B%7D%5D&skip=0&limit=10000';

    const uriData = _.uri.parse(url);

    const options = {
      host : uriData.host,
      path : uriData.path
    }

    function callback(response) {
      var str = '';
      response.on('data', function (chunk) {
        str += chunk;
      });
      response.on('end', function () {
        console.log(str);
      });
    }

    http.request(options, callback).end();
  }

  getPackageDetails('@tensorflow/tfjs');

  // function abs() { return _.path.s.join( __dirname, ... arguments ) }

  // const generalPurposeData = _.fileProvider.fileRead({
  //   filePath : abs('../data/GeneralPurpose.yml'),
  //   encoding : 'yaml',
  // });

  // generalPurposeData.forEach((lib) => {
  //   const registryData = _.npm.dependantsRertive(lib.npmName);
  //   // і далі перевірка поля dependents
  // });

  // _.fileProvider.fileWrite({
  //   filePath : abs('../data/GeneralPurpose.yml'),
  //   data : generalPurposeData,
  //   encoding : 'yaml',
  // });

  // console.log(generalPurposeData);
})();
