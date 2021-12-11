var getNewMusicButtonEl = $('#top-tracks-btn');
var dateRangeButtonEl = $('#top-albums-btn');
var musicGenreButtonEl = $('#top-playlist-btn');

var containerEl = document.getElementById("music-container");
var containerhEl = document.createElement("h1");
containerhEl.textContent = "1990s - 2000s"
containerhEl.style.backgroundColor = "white";

// var inputEl = $('#input');
// var keyDownContainerEl = $('.container');

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
    location.reload();
 });

//  inputEl.on('keydown', function keydownFunction(typing) {
    // console.log('A key was pressed down...');
    // console.log(typing);
//  });


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=beck",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "7c3f0df3eamsha4eee5ccdea5495p147d72jsn739a600c7550"
	}
};

$.ajax(settings).done(function (response) {



    for (var i = 0; i < 20; i++) {
     var createItem = document.createElement("li");
     var list = document.getElementById("music-container")

     createItem.innerHTML=response.data[i].title

     list.appendChild(createItem);
    }


});


