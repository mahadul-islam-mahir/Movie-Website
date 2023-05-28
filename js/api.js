'use strict';

const api_key = '807749fa7795e3efe43cf1ab112dcda0';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDatafromServer = function(url, callback, optionalParam) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDatafromServer };