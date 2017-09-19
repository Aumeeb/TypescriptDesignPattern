"use strict";
var ProxyPattern;
(function (ProxyPattern) {
    class RealImage {
        constructor(fileName) {
            this.fileName = fileName;
            this.loadFromDisk(fileName);
        }
        display() {
            console.log("Displaying " + this.fileName);
        }
        loadFromDisk(fileName) {
            console.log("Loading " + this.fileName);
        }
    }
})(ProxyPattern || (ProxyPattern = {}));
