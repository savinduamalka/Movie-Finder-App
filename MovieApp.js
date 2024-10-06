function search(event) {

    event.preventDefault();

    var movieName = document.getElementById("movie-name").value;

    const htmlRequest = new XMLHttpRequest();


    const link = "http://www.omdbapi.com/?apikey=e7e1bceb&t=" + encodeURIComponent(movieName);
    htmlRequest.open('GET', link, true);
    
    htmlRequest.onload = function() {

        if (htmlRequest.status >= 200 && htmlRequest.status < 300) {
   
            const response = JSON.parse(htmlRequest.responseText);
            console.log(response);

  
            const content = document.getElementById("content");


            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }


            const title = document.createElement("h2");
            title.innerText = response.Title;

            const year = document.createElement("p");
            year.innerText = "Release Year: " + response.Year;

            const director = document.createElement("p");
            director.innerText = "Director: " + response.Director;

            const language = document.createElement("p");
            language.innerText = "Language: " + response.Language;

            const runtime = document.createElement("p");
            runtime.innerText = "Runtime: " + response.Runtime;

            const rating = document.createElement("p");
            rating.innerText = "Rating: " + response.imdbRating;

            const imgTag = document.createElement("img");
            imgTag.src = response.Poster;


            content.appendChild(title);
            content.appendChild(year);
            content.appendChild(language);
            content.appendChild(runtime);
            content.appendChild(director);
            content.appendChild(rating);
            content.appendChild(imgTag);


            document.title = response.Title; 
        } else {
            console.error('Error:', htmlRequest.statusText);
        }
    };


    htmlRequest.send();
}
