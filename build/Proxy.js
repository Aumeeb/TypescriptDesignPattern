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
    class ProxyImage {
        constructor(fileName) {
            this.fileName = fileName;
        }
        display() {
            if (this.realImage == null) {
                this.realImage = new RealImage(this.fileName);
            }
            this.realImage.display();
        }
    }
    var image = new ProxyImage('test_10mb.jpg');
    image.display();
    image.display();
})(ProxyPattern || (ProxyPattern = {}));
