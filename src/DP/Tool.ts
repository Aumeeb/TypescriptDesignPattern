class Tool {
    clone<T>(source: T): T {
        var _obj: any = {};
        for (var key in source) {
            if (this.hasOwnProperty(key)) {
                var element = source[key];
                if (typeof element == 'string') {
                    Reflect.defineProperty(_obj, key, { value: element });
                }
                if (element instanceof Array) {
                    Reflect.defineProperty(_obj, key, { value: element });
                }

            }
        }
        Reflect.setPrototypeOf(_obj, Reflect.getPrototypeOf(this));
        return <T>_obj;
    }
    async asyncAccumulate(times: number): Promise<number> {
        var promise = new Promise<number>((resolve, reject) => {
            let total = 0;
            for (var index = 0; index < times; index++) {
                total += index;
            }
            resolve(total);

            reject();
        });
        return promise;
    }
    async asyncAction(func: () => void): Promise<void> {
        return new Promise<void>((resolve, rejuect) => {
            func();
            resolve();
        })
    }
    async combineAccumulate() {
        var aAct: number;
        var aAct: number;
        await this.asyncAccumulate(100 * 100);
        await this.asyncAccumulate(100 * 100);
    }
    // public static reading(path: string, content: string = ''): Promise<string> {
    //     return new Promise(resolve => {
    //         FS.readFile(path, { encoding: 'utf-8', flag: 'r' }, (err, data) => {
    //             resolve(content + '\n' + data);
    //         })
    //     });
    // }
}

var tool = new Tool();

tool.asyncAction(
    () => {
        let total = 0;
        for (var index = 0; index < 250000000; index++) {
            total += index;
        }
    }

).then(() => {
    console.log("计算完毕")
     
})
console.log("继续执行")

/**2.4 syntax */
function arrayMap<T, U>(f: (x: T) => U): (a: T[]) => U[] {
    return a => a.map(f);
}

const lengths: (a: string[]) => number[] = arrayMap(s => s.length);
// tool.asyncAction(
//     ()=>{
//         let total = 0;
//         for (var index = 0; index < 250000000; index++) {
//             total += index;
//         }
//     }

// ).then(()=>{
//     console.log("计算完毕")    
// })
// console.log("继续执行")
async function printDelayed(elements: string[]) {
    for (const element of elements) {
         delay(4000);
        console.log(element);
    }
}
var times=10;
async function delay(milliseconds: number) {
    return new Promise<void>(resolve => {
        setTimeout(() => { 
            for (var index = 0; index < times; index++) {
                console.log(index);
            }
            resolve() }
            , milliseconds);
    });
}

printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
    console.log();
    console.log("打印每一个内容!");
});
