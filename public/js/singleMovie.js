

console.log(movie_id)

//load data for single movie on to the page
$.getJSON(APT_BASE_URL + `/movie/${movie_id}`, apiOptions)
.then((movie) =>{
    console.log(movie)

    $("#title").text(movie.title)
    $("#poster").attr({
        src: IMAGE_BASE_URL1 + movie.poster_path,
        alt: movie.title
    })
    movie.genres.forEach((genre, index) =>{
        $("#genres").append(genre.name)
        if (index !== movie.genres.length - 1) $("#genres").append("/")
    })
    $("#summary").text(movie.overview)
    $("#Rating").append(movie.vote_average)
    $("#Date").append(movie.release_date)
  
  movie.spoken_languages.forEach((spoken_languages, index) =>{
    $("#Languages").append(spoken_languages.name)
    if (index !== movie.spoken_languages.length - 1) $("#Languages").append(", ")
})
})
.catch((error) => {
    console.log(error)
    $("main").append("There was an error")
})



// handle comment form submission

$("#comment-form").submit((e) =>{
  e.preventDefault()

  $.post(`/movies/${movie_id}`, {
   comment: $("#comment").val()
    
  })
  .then((response) => {
   const html = `
   <div>
   <p><strong>${response.comment}</strong></p>
   <p>${response.created_at}</p>
   </div>
   `

   $("#comments").prepend(html)
  })
  .catch((error) => {
    console.log(error)
  })
})

    
