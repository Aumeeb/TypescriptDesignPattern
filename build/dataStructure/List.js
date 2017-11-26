"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash = require("lodash");
class List {
    constructor(capacity) {
        this._defaultCapacity = 4;
        this.emptyArray = new Array();
        if (capacity == null)
            return;
        if (capacity < 0) {
            console.log('out fo range');
        }
        else {
            this._items = new Array(capacity);
        }
    }
    add(obj) {
        this._items.push(obj);
        return this._items.length;
    }
    insert(index, obj) {
        lodash.add(1, 2).toExponential;
    }
    remove(index) {
    }
    count() {
        return this._items.length;
    }
}
new List();
class A {
    conbine(val, val2) {
        if (typeof val === 'string' && typeof val2 === 'string') {
            return val + val2;
        }
        if (typeof val === 'number' && typeof val2 === 'number') {
            return val + val2;
        }
        return null;
    }
}
console.log(new A().conbine(1, 2));
console.log(new A().conbine('1', '2'));
new List();
new List(5);
//# sourceMappingURL=List.js.map