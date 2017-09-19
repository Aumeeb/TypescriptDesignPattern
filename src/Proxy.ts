namespace ProxyPattern {
    interface Image {
        display(): void;
    }
    class RealImage implements Image {

        private fileName: string;

        constructor(fileName: string) {
            this.fileName = fileName;
            this.loadFromDisk(fileName);
        }

        display(): void {
            console.log("Displaying " + this.fileName);
        }

        private loadFromDisk(fileName: string): void {
            console.log("Loading " + this.fileName);
        }
    }
}