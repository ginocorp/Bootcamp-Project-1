//Button Selectors
var topTracksButtonEl = $('#top-tracks-btn');

//Element Selectors
var containerEl = document.getElementById("music-container");
var containerhEl = document.createElement("h1");
var inputEl = document.getElementById("input"); 
var pEl = document.getElementById("searchbartext");

// Function to add key name in local storage
function search() {
        var search = localStorage.getItem("search"); 
        console.log(search);
        return search 
}

topTracksButtonEl.on('click', function() {
    // Saves search term data into local storage
    localStorage.setItem("search", inputEl.value);
    console.log(localStorage);
    pEl.innerHTML = "<font> You Typed: " + search(); +"</font>"

    function reset() {
        while (containerEl.firstChild) {
            containerEl.removeChild(containerEl.firstChild);
        }
    }

    reset();

    var inputVal = document.getElementById("input").value;

    // console.log(inputVal);

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




