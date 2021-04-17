//http://www.omdbapi.com/?s=tt3896198&apikey=9226bd93   // reomove and i and keep s
// let input = document.getElementById("search");
// input.addEventListener("kayup",e =>{
//     console.log(e.target.value);
// })

// let input = document.getElementById("search");
// input.addEventListener("keyup",e =>{
//     if (e.keyCode===13){                              //c is caps in keyCode
//    let value = e.target.value;
//    searchmovies(value);
//     }
// })
// function searchmovies(searchtext){
//     console.log(searchtext);
// }

// function searchmovies(searchtext){
//     window.fetch("http://www.omdbapi.com/?s=tt3896198&apikey=9226bd93");        // my own check once
//     window.then(data =>{});                                                     // removed i and replaces as s
//     window.catch(err => console.log(err));                                      // removed from tt and added template literal
// }


// function searchmovies(searchtext){
//     window.fetch(`http://www.omdbapi.com/?s=${searchtext}&apikey=9226bd93`).then(data =>{})
//     .catch(err => console.log(err));
// }


// function searchmovies(searchtext){
//     window.fetch(`http://www.omdbapi.com/?s=${searchtext}&apikey=9226bd93`)
//     .then(data =>{
//         //convert response body into json object
//         // console.log(data);
//         data.json().then(movies =>{
//             console.log(movies.Search);                                 // s is caps in movies.Search
//         }).catch (err=> console.log(err))
//     })
//     .catch(err => console.log(err));
// }


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
      .fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=f1619349`)
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










