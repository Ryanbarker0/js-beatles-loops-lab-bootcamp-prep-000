function theBeatlesPlay(musicians, instruments) {
  var instrumentsPlayed = []
  for (var i = 0; i < musicians.length; i++) {
    console.log(instrumentsPlayed.slice(musicians[i] + 'plays' + instruments[i]))
  }
}
