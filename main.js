const app = {
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
        this.data.music = []
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
app.main()
/* const musicURL = "https://itunes.apple.com/search?term=";
let searchForm = document.getElementById("searchForm");
let searchField = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let results = document.getElementById("results");
const searchResults = {
    data: {
        music: []
    }
} */

/* let searchForm = document.getElementById("searchForm"),
    let searchField = document.getElementById("searchField")
    let field = searchField.value,


    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let field = searchField.value
    console.log(field);
    fetch(musicURL + field).then((response) => {
        if (response.status === 200) {
            return response.json();}
            else {
                let errorMsg = document.createElement('h2');
                errorMsg.innerText = "Error, double-check your tunes.";
                results.appendChild(errorMsg);
            }
        }).then((parsedJsonResponse) => {
            console.log(parsedJsonResponse);
            
        })
    }) */


    
    
//trying to create resultsCard, not sure how to pull from response
/*     function resultsInfo() {
        results.innerHTML = [];
        for (let songs of searchResults.data.music) {
            results.innerHTML +=
         `<div class="resultsCard">
        <img src="${response.results.artworkUrl30}" class="resultsPhoto">
        <p class="songTitle">${response.results.trackName}</p>
        <h3 class="artistName">${response.results.artistName}</h3>
        </div>
         `}
    };
 */
    /* let allResults = response.map((parsedJsonResponse) =>
    resultsInfo(response)).join('\n');

    entryPoint.innerHTML = allResults; */
