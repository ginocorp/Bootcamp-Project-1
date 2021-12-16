//Button Selector
var topTracksButtonEl = $('#top-tracks-btn');

//Create Element
var containerhEl = document.createElement("h1");

//Element Selectors and event listener
var containerEl = document.getElementById("music-container");
var inputEl = document.getElementById("input");
var pEl = document.getElementById("searchbartext");

// Function to add key name in local storage
function search() {
    var search = localStorage.getItem("search");
    return search
}

// Event Listener for the "Top Tracks" button
topTracksButtonEl.on('click', function () {

    // Saves search term data into local storage
    localStorage.setItem("search", inputEl.value);
    pEl.innerHTML = "<font> You Typed: " + search(); +"</font>"

    function reset() {
        while (containerEl.firstChild) {
            containerEl.removeChild(containerEl.firstChild);
        }
    }

    reset();

    //Grabs top 20 tracks for artist
    var inputVal = document.getElementById("input").value;
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

            createItem.innerHTML = response.data[i].title;

            list.appendChild(createItem);
        }
    });


    //Makes the image an image of an the artist, using the Google API
    var artistImg = document.getElementById("artistImg");
    const settingsImg = {
        "async": true,
        "crossDomain": true,
        "url": `https://google-image-search1.p.rapidapi.com/?keyword=${inputVal}&max=1`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "google-image-search1.p.rapidapi.com",
            "x-rapidapi-key": "928ef6bc15msh2c89e5b6c90b82cp103314jsn719e3b7b78f0"
        }
    };
    // This function sets the artist image as the search result
    $.ajax(settingsImg).done(function (response) {
        artistImg.src = response[0].image.url;
    });

});




