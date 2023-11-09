"use strict";

const endpoint = "https://musicooliowebapp.azurewebsites.net";

// Artists array (global);

async function getData(type) {
    const response = await fetch(`${endpoint}/${type}`);
    const data = await response.json();
    const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    return dataArray;
}

export {
    getData
};

    


