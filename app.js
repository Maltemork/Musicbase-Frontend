"use strict";

import { getData } from "./Crud/rest.js";
import { sortAnArray } from "./Crud/sort-filter-search.js";

let tracks = [];
let sortDir = "desc";
let listContainer = document.querySelector("#main_table tbody");


window.addEventListener("load", initFunction);

async function initFunction() {
    tracks = await getData("tracks"); 
    filterSearchSort("track");
    console.log(tracks);
    startEventListeners();
}

function startEventListeners() {
    document.querySelector("#search_field").addEventListener("input", () => {filterSearchSort("track");});

    document.querySelector("#track-sort").addEventListener("click", () => sortClicked("track"));
    document.querySelector("#artist-sort").addEventListener("click", () => sortClicked("artistName"));
    document.querySelector("#album-sort").addEventListener("click", () => sortClicked("albumName"));
}

function sortClicked(sortBy) {
    changeSortDir();
    console.log("click");
    if (sortDir === "desc") {
        filterSearchSort(sortBy);
    } else {
        filterSearchSort(`${sortBy}-reversed`);
    }
}

function changeSortDir() {
    if (sortDir === "desc") {
        sortDir = "asc";
    } else {
        sortDir = "desc";
    }
}

function renderListOnHTML(array, container) {
    document.querySelector("#main_table tbody").innerHTML = "";
    array.forEach(track => {
        let htmlData = /*HTML*/ `
        <tr>
            <td>${track.title}</td>
            <td>${track.artistName}</td>
            <td>${track.albumName}</td>
        </tr>`;

        container.insertAdjacentHTML("beforeend", htmlData);
    });
}

async function filterSearchSort(sortBy) {
    let searchInput = document.querySelector("#search_field").value;
    let filteredTracks = await sortAnArray(tracks, searchInput, sortBy);
    renderListOnHTML(filteredTracks, listContainer);
}

