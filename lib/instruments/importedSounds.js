// This imports sounds from the server.  These are the only sounds that are not synthesized.  We load
// the sounds at runtime, and then save them in an object called drumSounds
// To understand this code more, please reference my blog post:
// http://www.willvillanueva.com/the-web-audio-api-from-nodeexpress-to-your-browser/

var loadSound = function( ext ) {
  var request = new XMLHttpRequest();
  var url = window.location.origin + '/sounds/' + ext;

  request.open( "GET", url, true ); // Path to Audio File
  request.responseType = "arraybuffer"; // Read as Binary Data
  request.onload = function() {
      var incomingData = request.response;
      store( incomingData, ext );
  };
  request.send();
};