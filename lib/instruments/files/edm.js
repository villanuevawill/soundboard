module.exports = {
  attack:  function() {
   return 0.002;
  },
  dampen: function() {
   return 1;
  },
  wave: function( i, sampleRate, frequency ) {
   var base = this.modules[0];
   var mod = this.modules.slice( 1 );
   return mod[0](
     i,
     this.sampleRate,
     frequency,
     mod[8](
       i,
       this.sampleRate,
       frequency,
       mod[2](
         i,
         this.sampleRate,
         frequency,
         Math.pow( base( i, this.sampleRate, frequency, 0 ), 3 ) +
           Math.pow( base( i, this.sampleRate, frequency, 0.5 ), 5 ) +
           Math.pow( base( i, this.sampleRate, frequency, 1 ), 7 )
       )
     ) +
     mod[7](
       i,
       this.sampleRate,
       frequency,
       base( i, this.sampleRate, frequency, 1.75 )
     )
   );
  }
}