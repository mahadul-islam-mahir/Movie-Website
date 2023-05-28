'use strict';


const addEventOnElements = function (elements, eventType, callback) {
    for (const elem of elements) elem.addEventListener (eventType, callback);
}

const searchbox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function(){
    searchbox.classList.toggle("active");
});

const getMovieDetail = function(movieId) {
    window.localStorage.setItem("movieId", String(movieId));
}

const getMovieList = function(urlParam, genreName) {
    window.localStorage.setItem("urlParam", urlParam);
    window.localStorage.setItem("genreName", genreName);
}