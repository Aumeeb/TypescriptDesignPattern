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
    class ProxyImage implements Image {

        private realImage: RealImage;
        private fileName: string;

        constructor(fileName: string) {
            this.fileName = fileName;
        }


        display(): void {
            if (this.realImage == null) {
                this.realImage = new RealImage(this.fileName);
            }
            this.realImage.display();
        }
    }
    //图像将从磁盘加载
    var image = new ProxyImage('test_10mb.jpg');

    //图像将无法从磁盘加载
    image.display();

    //图像将无法从磁盘加载
    image.display();
}

/**
 * 代理模式是对函数调用的一种控制, 通过代理层来控制加载哪一个实力对象
 */