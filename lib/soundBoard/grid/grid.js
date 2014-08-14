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


  //we create a soundHash to do a calculation of all the sounds ahead of time.  We store the buffers
  //in this soundHash so we don't have to recalculate every time.
  //if a noteScheduler is passed in, then it will already have instructions on when it will be played.
  //This bit of code is related to the exportGrids function.  IT is also related to the set of instructions
  //you give the soundBoard to recreate any looped sound of multiple grids.


  //if notesScheduler doens't exist, then we create a matrice, or set of objects within each column, that
  //represent each sound that should be scheduled at each grid column.
  if ( noteScheduler ){
    this.noteScheduler = noteScheduler;
  }else{
    this.noteScheduler = (function(){
      var temp = [];
      for ( var i = 0; i < col; i++ ){
        temp.push({});
      }
      return temp;
    })();
  }

  // noteMatrix is an array of arrays representing the geometric layout of the grid
  // 0 = off, 1 = on
  this.noteMatrix = (function(){
    var columns = [];
    for (var c = 0; c < col; c++) {
      var row = [];
      for (var r = 0; r < 6; r++) {
        row.push(0);
      }
      columns.push(row);
    }
    return columns;
  })();

}
