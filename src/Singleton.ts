class Singleton {

    private static instance: Singleton;
    public name:string;
    private constructor() {

    }
    public static createInstance(): Singleton {
        if (this.instance == null) {
            this.instance = new Singleton();
            this.instance.name= 'I called singleton'
            return this.instance;
        } else {
            return this.instance;
        }
    }
}

console.log(Singleton.name);
console.log(Singleton.createInstance().name);

