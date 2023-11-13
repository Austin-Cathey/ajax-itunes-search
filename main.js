
const musicURL = "https://itunes.apple.com/search?term=";
let searchForm = document.getElementById("searchForm");
let searchField = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let resultsContainer = document.getElementById("results");





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
        <img src="${results.artworkUrl30}" class="resultsPhoto">
        <h3 class="artistName">${results.artistName}</h3>
        <p class="songTitle">${results.trackName}</p>
        </div>
         `
            })
            })
            
        })
    


    
    //couldn't get this to work
        /* const app = {
   data: {
     musicURL: "https://itunes.apple.com/search?term=",
     music: []
   },

  searchMusic: function() {
    let searchField = document.getElementById("searchField");
    let field = searchField.value;
    this.data.music = [];
    fetch(this.data.musicURL + field, {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
    .then(r=> r.json())
    .then(response => {
        console.log(response)
        for (let song of response.results) {
            this.data.music.push(song)
        }this.generateMusic();
    })
    },

    generateMusic: function() {
        let results = document.getElementById("results");
        results.innerHTML = [];
        for (let song of this.data.music) {
            results.innerHTML += `<div class="resultsCard">
            <img src="${song.artworkUrl30}" class="resultsPhoto">
            <p class="songTitle">${song.trackName}</p>
            <h3 class="artistName">${song.artistName}</h3>
            </div>
             `
        }
    },
addEventListeners: function() {
    let field= [];
    let searchButton = document.getElementById("searchButton");
for (let button of searchButton) {
    button.addEventListener('submit', (event) => {
        event.preventDefault();
        this.searchMusic();
    })
}},

main: function() {
    

},
}
app.main() */
