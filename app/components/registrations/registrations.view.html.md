## You could use a separate view file and use templateURL BUT:

- You would need to use absolute templateUrl paths (or create a helper function or something) because of transpiling, bundling and location of index.html
- You would need to put views in the angular templatecache for production

~
- By using template strings, the view wil still be seperated from the javascript logic, only easier located and accessed: Locality of Reference https://en.wikipedia.org/wiki/Locality_of_reference.
- Several IDE's are able to provider colorization and intellisense for (ES6) shtml templated strings in javascript.
