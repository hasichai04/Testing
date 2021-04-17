//http://www.omdbapi.com/?s=tt3896198&apikey=f1619349

let input = document.getElementById("search");
input.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    let value = e.target.value;
    SearchMovies(value);
  }
});

function SearchMovies(searchText) {
  window
    .fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=9226bd93`)
    .then(data => {
      //convert response body into JSON Object
      data
        .json()
        .then(movies => {
          let moviesData = movies.Search;
          let output = [];
          for (let movie of moviesData) {
            console.log(movie);
            output += `
                <div>
                    <img src=${movie.Poster} alt=${movie.Title} />
                    <h1>${movie.Title}</h1>
                    <p>${movie.Type}</p>
                    <p>${movie.Year}</p>
                </div>
                `;
          }
          document.getElementById("template").innerHTML = output;
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}