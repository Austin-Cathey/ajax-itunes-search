
const musicURL = "https://itunes.apple.com/search?term=";
let searchForm = document.getElementById("searchForm");
let searchField = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let resultsContainer = document.getElementById("results");
let resultsCard = document.querySelectorAll(".resultsCard");
let playingPreview = document.getElementById("playingPreview");
let playSample = document.querySelectorAll(".playSample");



    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let field = []
         field = searchField.value
    console.log(field);
    fetch(musicURL + field + "&media=music").then((response) => {
        if (response.status === 200) {
            return response.json();}
            else {
                let errorMsg = document.createElement('h2');
                errorMsg.innerText = "Error, double-check your tunes.";
                results.appendChild(errorMsg);
            }
        }).then((parsedJsonResponse) => {
            console.log(parsedJsonResponse);
            const songs = parsedJsonResponse.results;
            results.innerHTML = []
            return songs.map(results => {
                resultsContainer.innerHTML +=
                `<div class="resultsCard">
        <img src="${results.artworkUrl100}" class="resultsPhoto">
        <h3 class="artistName">${results.artistName}</h3>
        <p class="songTitle">${results.trackName}</p>
        <button class="playSample" data-id="${results.trackId}">Play Sample</button>
        </div>
        `
        //need to use dataset.id for target
        function play() {
            playSample.addEventListener('click', (event) => {
            event.preventDefault();
                playingPreview.src = results.previewUrl
                console.log(playingPreview.src)
        });
    }
            });
        play();

            

            })
            
        })