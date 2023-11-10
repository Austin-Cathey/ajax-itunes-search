const musicURL = "https://itunes.apple.com/search?term=";
let searchForm = document.getElementById("searchForm");
let searchField = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let results = document.getElementById("results");

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let field = searchField.value;
    console.log(field);
    fetch(musicURL + term).then((response) => {
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
    })

    
//trying to create resultsCard, not sure how to pull from response
    function resultsInfo(response) {
        return `<div class="resultsCard">
        <img src="${response.results.artworkUrl30}" class="resultsPhoto">
        <p class="songTitle">${response.results.trackName}</p>
        <h3 class="artistName">${response.results.artistName}</h3>
        </div>
         `
    };

    let allResults = response.map((response) =>
    resultsInfo(response)).join('\n');

    entryPoint.innerHTML = allResults;