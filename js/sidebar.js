'use strict';

import { api_key, fetchDatafromServer } from "./api.js";


export function sidebar () {
    const genreList = {};

    fetchDatafromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function({ genres }) {

    for (const { id, name} of genres) {
        genreList[id] = name;
        }

        genreLink();
    });

    const sidebarInner = document.createElement("div");
    sidebarInner.classList.add("sidebar-inner");

    sidebarInner.innerHTML = `
    <div class="siedbar-list">

    <p class="title">Genre</p>
</div>
<div class="siedbar-list">

  <p class="title">Language</p>

  <a href="./movie-list.html" menu-close class="sidebar-link" onclick='getMovieList("with_original_language=en", "English")'>English</a>
  <a href="./movie-list.html" menu-close class="sidebar-link" onclick='getMovieList("with_original_language=hi", "Hindi")'>Hindi</a>
  <a href="./movie-list.html" menu-close class="sidebar-link" onclick='getMovieList("with_original_language=bn", "Bengali")'>Bengali</a>
</div>
<div class="sidebar-footer">
  <p class="copyright">
      Copyright 2023
  </p>

  <img src="./assets/images/tmdb-logo.svg" width="130" height="17" alt="the movie database logo">
</div>
    `;

    const genreLink = function() {
        for (const [genreId, genreName] of Object.entries(genreList)) {
            const link = document.createElement("a");
            link.classList.add("sidebar-link");
            link.setAttribute("href", "./movie-list.html");
            link.setAttribute("menu-close", "");
            link.setAttribute("onclick", `getMovieList("with_genres=${genreId}", "${genreName}")`);
            link.textContent = genreName;

            sidebarInner.querySelectorAll(".siedbar-list")[0]
            .appendChild(link);
        }

        const sidebar = document.querySelector("[sidebar]");
        sidebar.appendChild(sidebarInner);
        toggleSidebar(sidebar);
    }


    const toggleSidebar = function(sidebar) {
        const sidebarBtn = document.querySelector("[menu-btn]");
        const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
        const sidebarClose = document.querySelectorAll("[menu-close]");
        const overly = document.querySelector("[overly]");

        addEventOnElements(sidebarTogglers, "click", function() {
            sidebar.classList.toggle("active");
            sidebarBtn.classList.toggle("active");
            overly.classList.toggle("active");
        });

        addEventOnElements(sidebarClose, "click", function() {
            sidebar.classList.remove("active");
            sidebarBtn.classList.remove("active");
            overly.classList.remove("active");
        });
    }
}
