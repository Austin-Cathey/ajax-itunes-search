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
                let errorMsg = document.createElement('h3');
                errorMsg.innerText = "Error, double-check your tunes.";
                results.appendChild(errorMsg);
            }
        }).then((parsedJsonResponse) => {
            console.log(parsedJsonResponse);
        })
    })
