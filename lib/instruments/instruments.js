var instruments = {
  piano: {
    attack: function() {
      return 0.002;
    },
    dampen: function( sampleRate, frequency, volume ) {
      return Math.pow( 0.5*Math.log( ( frequency*volume) / this.sampleRate), 2 );
    },
    wave: function( i, sampleRate, frequency, volume ) {
      var base = this.modules[0];
      return this.modules[1].call(this,
        i,
        sampleRate,
        frequency,
        Math.pow(base(i, this.sampleRate, frequency, 0 ), 2 ) +
        ( 0.75 * base(i, this.sampleRate, frequency, 0.25 ) ) +
        (0.1 * base(i, this.sampleRate, frequency, 0.5 ) )
      );
    }
  },
  organ: {
    attack: function() {
      return 0.3;
    },
    dampen: function( sampleRate, frequency ) {
      return 1 + ( frequency * 0.01 );
    },
    wave: function( i, sampleRate, frequency ) {
      var base = this.modules[0];
      return this.modules[1](
        i,
        this.sampleRate,
        frequency,
        base( i, this.sampleRate, frequency, 0 ) +
          0.5 * base( i, this.sampleRate, frequency, 0.25 ) +
          0.25 * base( i, this.sampleRate, frequency, 0.5 )
      );
    }
  }
};