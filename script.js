var getNewMusicButtonEl = $('#get-new-music-btn');
var dateRangeButtonEl = $('#date-range-btn');
var musicGenreButtonEl = $('#music-genre-btn');

var containerEl = $('#music-containter');

getNewMusicButtonEl.on('click', function() {
    console.log('I was clicked to generate new music...');
    alert('Type on the search bar to look up the latest hits on music charts!');
});

dateRangeButtonEl.on('click', function() {
    console.log('I was clicked to generate a range of dates...');
    
});

musicGenreButtonEl.on('click', function() {
    console.log('I was clicked to generate music genres...');
});