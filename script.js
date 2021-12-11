//Button Selectors
var topTracksButtonEl = $('#top-tracks-btn');
var topAlbumsButtonEl = $('#top-albums-btn');
var topPlaylistsButtonEl = $('#top-playlist-btn');
// var sendMeMusicButtonEl = $('#send-me-music-btn');

//Element Selectors
var containerEl = document.getElementById("music-container");
var containerhEl = document.createElement("h1");
var inputEl = document.getElementById("input"); 
var pEl = document.getElementById("searchbartext");
var elements = [pEl];



// var keyDownContainerEl = $('.container');

topTracksButtonEl.on('click', function() {
    
    function reset() {
        while (containerEl.firstChild) {
            containerEl.removeChild(containerEl.firstChild);
        }
    }

    reset();

    var inputVal = document.getElementById("input").value;

    console.log(inputVal);

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://deezerdevs-deezer.p.rapidapi.com/search?q=${inputVal}`,
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
});

topAlbumsButtonEl.on('click', function() {
    console.log('I was clicked to generate a range of dates...');
    containerEl.append(containerhEl);
});

topPlaylistsButtonEl.on('click', function() {
    console.log('I was clicked to generate music genres...');
    location.reload();
 });


// function keydownFunction() {
//     console.log('Key is being pressed...');
//     pEl.innerHTML = "<font color=\"white\">You typed: " + text +"</font>"
//     text.textContent = text++;
// }

// inputEl.addEventListener('keydown', function keydownFunction(event) {
//     // console.log('Key is being pressed...');
//     // console.log(event);
//     pEl.innerHTML = "<font class=\"subtitle text-light\">You typed: " + text + " </font>"    
// });

inputEl.onkeydown = function (event) {
    pEl.innerHTML = inputEl.value;
}

// inputEl.addEventListener('keydown', function(event) {
//     var key = event.key.toLowerCase();
//     elements.forEach(display => display.textContent += key)      
// })