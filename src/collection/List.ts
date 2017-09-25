
class List<T> {
    constructor(capacity?: number) {

        if (capacity == null)
            return;
        if (capacity < 0) {
            console.log('out fo range')
        } else {
            this._items = new Array<T>(capacity);
        }


    }
    private _defaultCapacity: number = 4;
    private _items: Array<T>;

    private _size: number;

    private emptyArray: Array<T> = new Array<T>();






}
new List<number>();


class A {
    conbine<T extends number | string>(val: T, val2: T): T | null {
        if (typeof val === 'string' && typeof val2 === 'string') {
            return val + val2 as T
        }
        if (typeof val === 'number' && typeof val2 === 'number') {
            return val + val2 as T
        }
        return null;
    }


}
console.log(new A().conbine(1, 2))
console.log(new A().conbine('1', '2'))


new List()
new List(5)