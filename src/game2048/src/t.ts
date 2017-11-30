type OneD<T> = Array<T>;
type TwoD<T> = Array<OneD<T>>;
function isOneD<T>(x: any): x is OneD<T> {
    return x instanceof Array && x[0] instanceof Array === false;
}
function isTwoD<T>(x: any): x is TwoD<T> {
    return isOneD(x[0]) && x instanceof Array;
}
function foo(bar: OneD<number> | TwoD<number>): void {
    if (isTwoD(bar)) {
        var b2 = bar;
        // todo
    }
    else {
        var b = bar;
        // todo
    }
}


class Elephant {
    name: string
}



function is1d2<T>(any: any): any is Array<T> {
    return any[0] instanceof Array
}


function Foo2<T>(d1: Array<T> | Array<Array<T>>) {
    if (d1[0] instanceof Array) {
        var newd1= d1 as Array<Array<T>>;
    }else{
        var newd2= d1 as Array<T>;
    }
}

