/**
 *  the most easily design pattern of 23 design patterns 
 *  limit the specific reference type can be declared only once
 */
class SingletonLazy {

    private static instance: SingletonLazy;
    public name: string;
    private constructor() {

    }
    public static createInstance(): SingletonLazy {
        if (this.instance == null) {
            this.instance = new SingletonLazy();
            this.instance.name = 'I called singleton'
            return this.instance;
        } else {
            return this.instance;
        }
    }
}

console.log(SingletonLazy.name);
console.log(SingletonLazy.createInstance().name);

class SingletonImmediately {
    private static instance = new SingletonImmediately();

    public static createInstance(): SingletonImmediately{
        return this.instance;
        
    }
    
        
    
}

/**
 * 1,单例只有一个实例
 * 2,只能在内部自己创建
 * 3,能够提供外部调用
 */