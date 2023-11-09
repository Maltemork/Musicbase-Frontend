// Logic is Filter -> Search ->  Sort
//filter in array.

async function sortAnArray(array, search, sort) {
  let searchedArray = searchInArray(array, search);
  let sortedArray = sortArray(searchedArray, sort);
  return sortedArray;
}

// search array
function searchInArray(array, searchInput) {
  if (searchInput === "" || searchInput === null) {
    return array;
  } else {
    // Search on track title.
    let arr1 = array.filter((obj) => obj.title.toLowerCase().includes(searchInput.toLowerCase()));
    let arr2 = array.filter((obj) => obj.artistName.toLowerCase().includes(searchInput.toLowerCase()));
    let arr3 = array.filter((obj) => obj.albumName.toLowerCase().includes(searchInput.toLowerCase()));
    return arr1.concat(arr2.concat(arr3));
  }
}

// Sort array
function sortArray(array, sortType) {
    // Sort by artist name
    if (sortType == "artistName") {
      return array.sort((a, b) => a.artistName.localeCompare(b.artistName));
    }
    if (sortType == "artistName-reversed") {
      return array.sort((a, b) => b.artistName.localeCompare(a.artistName));
    }
    if (sortType == "track") {
      return array.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortType == "track-reversed") {
      return array.sort((a, b) => b.title.localeCompare(a.title));
    }
    if (sortType == "albumName") {
      return array.sort((a, b) => a.albumName.localeCompare(b.albumName));
    }
    if (sortType == "albumName-reversed") {
      return array.sort((a, b) => b.albumName.localeCompare(a.albumName));
    }
  
  }

  export {
    sortAnArray
  };