"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    asyncAccumulate(times) {
        return __awaiter(this, void 0, void 0, function* () {
            var promise = new Promise((resolve, reject) => {
                let total = 0;
                for (var index = 0; index < times; index++) {
                    total += index;
                }
                resolve(total);
                reject();
            });
            return promise;
        });
    }
    asyncAction(func) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, rejuect) => {
                func();
                resolve();
            });
        });
    }
    combineAccumulate() {
        return __awaiter(this, void 0, void 0, function* () {
            var aAct;
            var aAct;
            yield this.asyncAccumulate(100 * 100);
            yield this.asyncAccumulate(100 * 100);
        });
    }
}
var tool = new Tool();
tool.asyncAction(() => {
    let total = 0;
    for (var index = 0; index < 250000000; index++) {
        total += index;
    }
}).then(() => {
    console.log("计算完毕");
});
console.log("继续执行");
function arrayMap(f) {
    return a => a.map(f);
}
const lengths = arrayMap(s => s.length);
function printDelayed(elements) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const element of elements) {
            delay(4000);
            console.log(element);
        }
    });
}
function delay(milliseconds) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    });
}
printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
    console.log();
    console.log("打印每一个内容!");
});
