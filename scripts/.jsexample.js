/*
you always need to make an async funtion to wait for the result of the fetch
*/

function fetchFromData(name) {
    return fetch("src/data/" + name + ".json")
        .then(response => response.json());
}