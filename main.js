
const musicURL = "https://itunes.apple.com/search?term=";
let searchForm = document.getElementById("searchForm");
let searchField = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let resultsContainer = document.getElementById("results");
let resultsCard = document.querySelectorAll(".resultsCard");
let playingPreview = document.getElementById("playingPreview");




    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let field = []
         field = searchField.value
   /*  console.log(field); */
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
                const resultsCard = document.createElement('div');
                artist = document.createElement('h3');
                trackList = document.createElement('p');
                album = document.createElement('img');
                let playButton = document.createElement('button');

                playButton.innerText = "Play Sample";

                playButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    playingPreview.src = results.previewUrl
                });
                
                artist.innerHTML = results.artistName;
                trackList.innerHTML = results.trackName;
                album.src = results.artworkUrl100;

                resultsCard.appendChild(album);
                resultsCard.appendChild(artist);
                resultsCard.appendChild(trackList);
                resultsCard.appendChild(playButton);
                
                resultsContainer.appendChild(resultsCard);
                
                
                /*    resultsContainer.innerHTML +=
                `<div class="resultsCard">
        <img src="${results.artworkUrl100}" class="resultsPhoto">
        <h3 class="artistName">${results.artistName}</h3>
        <p class="songTitle">${results.trackName}</p>
        <button class="playSample" data-id="${results.reviewUrl}">Play Sample</button>
        </div>
        `
         */
    });
   
    
})
})

/* let playSample = document.querySelectorAll(".playSample");
function play() {
    for (let button of playSample)
    button.addEventListener('click', (event) => {
event.preventDefault();
playingPreview.src = event.target.dataset.id
console.log()    
})
}; */






 
 //need to use dataset.id for target

