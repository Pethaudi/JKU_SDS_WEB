function fetchFromLocalFile(path, toSave){
    fetch(path)
        .then(response => JSON.parse(response))
        .then(json => toSave = json);
}