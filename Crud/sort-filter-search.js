// Searches in array, which returns a filtered array. Then run the filtered array through the sorting process and return the sorted array.
async function sortAnArray(array, search, sort) {
  let searchedArray = searchInArray(array, search);
  let sortedArray = sortArray(searchedArray, sort);
  return sortedArray;
}

// Search
function searchInArray(array, searchInput) {
  if (searchInput === "" || searchInput === null) {
    return array;
  } else {
    // Search on song title, artist name and album name.
    let arr1 = array.filter((obj) => obj.title.toLowerCase().includes(searchInput.toLowerCase()));
    let arr2 = array.filter((obj) => obj.artistName.toLowerCase().includes(searchInput.toLowerCase()));
    let arr3 = array.filter((obj) => obj.albumName.toLowerCase().includes(searchInput.toLowerCase()));
    return arr1.concat(arr2.concat(arr3));
  }
}

// Sort 
function sortArray(array, sortType) {
  // Sort by song title.
  if (sortType == "title") {
    return array.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sortType == "title-reversed") {
    return array.sort((a, b) => b.title.localeCompare(a.title));
  }
  // Sort by artist name.
  if (sortType == "artistName") {
    return array.sort((a, b) => a.artistName.localeCompare(b.artistName));
  }
  if (sortType == "artistName-reversed") {
    return array.sort((a, b) => b.artistName.localeCompare(a.artistName));
  }

  // Sort by album name.
  if (sortType == "albumName") {
    return array.sort((a, b) => a.albumName.localeCompare(b.albumName));
  }
  if (sortType == "albumName-reversed") {
    return array.sort((a, b) => b.albumName.localeCompare(a.albumName));
  }
}

// Export
export {
  sortAnArray
};