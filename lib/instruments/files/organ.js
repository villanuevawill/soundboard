module.exports = {
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
};