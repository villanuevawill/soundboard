'use strict';

var fs = require( 'fs' );
var files = fs.readdirSync( 'files' );

var instruments = {};
var route = './lib/instruments/files/';

for (var i = 0; i < files.length; i++){
  instruments[ files[i].split( '.' )[0] ] = require( route  + files[i] );
}

module.exports = instruments;

