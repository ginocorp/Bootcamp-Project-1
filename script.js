var getNewMusicButtonEl = $('#top-tracks-btn');
var dateRangeButtonEl = $('#top-albums-btn');
var musicGenreButtonEl = $('#top-playlist-btn');

var containerEl = document.getElementById("music-container");
var containerhEl = document.createElement("h1");
containerhEl.textContent = "1990s - 2000s"
containerhEl.style.backgroundColor = "white";

var inputEl = $('#input');
var keyDownContainerEl = $('.container');

// var requestUrl = 'https://api.github.com/users/nazaokafor/repos';

getNewMusicButtonEl.on('click', function() {
    console.log('I was clicked to generate new music...');
    alert('Type on the search bar to look up the latest hits on music charts!');
});

dateRangeButtonEl.on('click', function() {
    console.log('I was clicked to generate a range of dates...');
    containerEl.append(containerhEl);
});

 musicGenreButtonEl.on('click', function() {
    console.log('I was clicked to generate music genres...');
    // console.log(`Naza URL: ${requestUrl}`);
    // fetch(requestUrl);
    // console.log('I am working....');
    // .then(() => {
    location.reload();
 });

//  inputEl.on('keydown', function keydownFunction(typing) {
    // console.log('A key was pressed down...');
    // console.log(typing);
//  });



//https://api.spotify.com/v1/browse/new-releases



console.log()