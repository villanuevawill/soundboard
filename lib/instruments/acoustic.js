module.exports ={
  attack:  function() {
    return 0.002;
  },
  dampen: function() {
    return 1;
  },
  wave: function( i, sampleRate, frequency ) {
    var vars = this.vars;
    vars.valueTable = !vars.valueTable ? [] : vars.valueTable;
    if( typeof( vars.playVal ) === 'undefined' ) {
      vars.playVal = 0;
    }
    if ( typeof( vars.periodCount ) === 'undefined' ) {
      vars.periodCount = 0;
    }

    var valueTable = vars.valueTable;
    var playVal = vars.playVal;
    var periodCount = vars.periodCount;
    var period = this.sampleRate / frequency;
    var p_hundredth = Math.floor( ( period - Math.floor( period ) ) * 100 );
    var resetPlay = false;

    if( valueTable.length <= Math.ceil( period ) ) {
      valueTable.push( Math.round( Math.random() ) * 2 - 1 );
      return valueTable[valueTable.length-1];
    } else {
      valueTable[playVal] = ( valueTable[playVal >= ( valueTable.length - 1 ) ? 0 : playVal + 1] + valueTable[playVal] ) * 0.5;
      if ( playVal >= Math.floor( period ) ) {
        if( playVal < Math.ceil( period ) ) {
          if( ( periodCount % 100 ) >= p_hundredth ) {
            // Reset
            resetPlay = true;
            valueTable[playVal + 1] = ( valueTable[0] + valueTable[playVal + 1] ) * 0.5;
            vars.periodCount++;
          }
        } else {
          resetPlay = true;
        }
      }
      var _return = valueTable[playVal];
      if( resetPlay ) {
        vars.playVal = 0;
      } else {
        vars.playVal++;
      }
      return _return;
    }
  }
};