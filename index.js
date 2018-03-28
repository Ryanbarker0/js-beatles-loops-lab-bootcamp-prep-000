function theBeatlesPlay(musicians, instruments) {
  var instrumentsPlayed = []
  for (var i = 0; i < musicians.length; i++) {
    instrumentsPlayed.push(musicians[i] + 'plays' + instruments[i])
  }
  return instrumentsPlayed
}
