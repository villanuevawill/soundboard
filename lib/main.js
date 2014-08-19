// this is an artifact of a older version
// will be integrated into the module
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

module.exports = context;