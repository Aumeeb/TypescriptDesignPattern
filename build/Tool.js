"use strict";
class Tool {
    clone(source) {
        var _obj = {};
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
        return _obj;
    }
    async asyncAccumulate(times) {
        var promise = new Promise((resolve, reject) => {
            let total = 0;
            for (var index = 0; index < times; index++) {
                total += index;
            }
            resolve(total);
            reject();
        });
        return promise;
    }
    async asyncAction(func) {
        return new Promise((resolve, rejuect) => {
            func();
            resolve();
        });
    }
    async combineAccumulate() {
        var aAct;
        var aAct;
        await this.asyncAccumulate(100 * 100);
        await this.asyncAccumulate(100 * 100);
    }
}
var tool = new Tool();
async function printDelayed(elements) {
    for (const element of elements) {
        delay(4000);
        console.log(element);
    }
}
async function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
    console.log();
    console.log("打印每一个内容!");
});
