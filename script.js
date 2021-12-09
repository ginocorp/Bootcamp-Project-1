var getNewMusicButtonEl = $('#get-new-music-btn');
var dateRangeButtonEl = $('#date-range-btn');
var musicGenreButtonEl = $('#music-genre-btn');

var containerEl = document.getElementById("music-container");
var containerhEl = document.createElement("h1");
containerhEl.textContent = "1990s - 2000s"
containerhEl.style.backgroundColor = "white";

var requestUrl = 'https://api.github.com/users/nazaokafor/repos';

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
