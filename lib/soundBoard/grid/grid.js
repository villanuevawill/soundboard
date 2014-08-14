var Grid = function(instrument, BPM, freq, noteScheduler, col){
  //This is a class that creates individual grids.  Each grid will be a specific instrument, and it can have
  //its own BPM, frequency, or noteSchedule.  The notescheduler contains a matrix of which notes should be
  //played in the grid.

  // 8 columns by default
  if (!col) {
    var col = 8;
  }

  this.sampleRate = 44100;
  //Most PC sound cards run at 44100.  All this means is that there is 44100 data points for every
  //second of sound.
  this.BPM = BPM;
  this.instrumentName = instrument;
  this.freq = freq;
  //frequency is the same as pitch
  this.vars = {};
  //vars is a temporary storage object. It is used in the 'acoustic' instrument algorithm/equation.
  this.interval;
  this.soundHash = {};

}