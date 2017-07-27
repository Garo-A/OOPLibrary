function Library(name, creator){
  this.name = name
  this.creator = creator
  this.playlists = []
}

function Track(title, rating, length) {
  this.title = title
  this.rating = rating
  this.length = length
}

function Playlist(name) {
  this.name = name
  this.tracks = [];
  this.rating = 0
  this.duration = 0
}

//Gets average rating
Playlist.prototype.averageRating = function(){
  let sum = 0;

  for (let i = 0; i < this.tracks.length; i++) {
    sum += this.tracks[i].rating
  }
  this.rating = sum/this.tracks.length
}

//Gets total duration.
Playlist.prototype.totalDuration = function(){
  let tracksDuration = 0;

  for(let i = 0; i < this.tracks.length; i ++) {
    tracksDuration += this.tracks[i].length
  }
  this.duration = tracksDuration
}


// //TESTS:

// let testLibrary = new Library("TEST", "Garo");

// let track1 = new Track("Copied City", 5, 150);
// let track2 = new Track("Song of the Ancients", 3, 350);

// let testPlaylist = new Playlist("Garos Playlist")

// testPlaylist.tracks.push(track1);
// testPlaylist.tracks.push(track2);

// testPlaylist.averageRating();
// testPlaylist.totalDuration();

// testLibrary.playlists.push(testPlaylist);

// console.log(testLibrary);
