fetch("https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10")
    .then(response > response.json())
    .then(data => console.log(data));