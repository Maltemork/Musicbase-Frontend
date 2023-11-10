"use strict";

// Import functions from modules.
import { getData } from "./Crud/rest.js";
import { sortAnArray } from "./Crud/sort-filter-search.js";

// Initialize global variables.
let tracks = [];
let sortDir = "desc";
let listContainer = document.querySelector("#main_table tbody");

// Start the initFunction on load.
window.addEventListener("load", initFunction);

// Function to be run when page is loaded.
async function initFunction() {
    // Get data from endpoint and display the data in the table (sorted by song title)
    tracks = await getData("tracks"); 
    searchSort("title");
    // Start basic event listeners for page functionality.
    startEventListeners();
}

function startEventListeners() {
    // Search field functionality.
    document.querySelector("#search_field").addEventListener("input", () => {searchSort("title");});
    // Table head sort functionality (when clicked).
    document.querySelector("#title-sort").addEventListener("click", () => sortClicked("title"));
    document.querySelector("#artist-sort").addEventListener("click", () => sortClicked("artistName"));
    document.querySelector("#album-sort").addEventListener("click", () => sortClicked("albumName"));
}

// Function for sorting displayed array based on input (changes direction every time it is run).
function sortClicked(sortBy) {
    // Change the sorting direction
    if (sortDir === "desc") {
        sortDir = "asc";
    } else {
        sortDir = "desc";
    }
    // Check sorting direction and display the items based on the parameter to be sorted by.
    if (sortDir === "desc") {
        searchSort(sortBy);
    } else {
        searchSort(`${sortBy}-reversed`);
    }
}

// Search functionality.
async function searchSort(sortBy) {
    // Define searchfield
    let searchInput = document.querySelector("#search_field").value;
    // Await filtered array based on parameters.
    let filteredTracks = await sortAnArray(tracks, searchInput, sortBy);
    // Display filtered array in the HTML table.
    renderListOnHTML(filteredTracks, listContainer);
}

// Render table in the HTML based on array.
function renderListOnHTML(array, container) {
    // Clear the container
    container.innerHTML = "";

    // Insert each item in array as HTML in the container.
    array.forEach(item => {
        let htmlData = /*HTML*/ `
        <tr>
            <td>${item.title}</td>
            <td>${item.artistName}</td>
            <td>${item.albumName}</td>
        </tr>`;

        container.insertAdjacentHTML("beforeend", htmlData);
    });
}