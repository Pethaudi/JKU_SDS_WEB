# PROJECT STRUCTURE

### node_modules/ -> I think you know what this is

### src/ -> here actually happens all the magic

#### data/ -> here we save all our results from the JVM project (this happens automatically through the JVM project) (attention: don't save larger files than 100MB (add them to .gitignore))
* -> name all datasets so it explaines it self

#### js/ -> add all the js classes you have here
appearancePerType.js -> works with chart.js
worldmap.js -> displays every spawn on a worldmap
main.js -> you need the fetchFromFile(name) methode for grabbing data


### .gitignore -> add every path you want to include from uploading to git! (attention: also applies to me)

### index.html -> I think you know what this is

### package.json -> I think you know what this is