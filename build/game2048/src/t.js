"use strict";
function isOneD(x) {
    return x instanceof Array && x[0] instanceof Array === false;
}
function isTwoD(x) {
    return isOneD(x[0]) && x instanceof Array;
}
function foo(bar) {
    if (isTwoD(bar)) {
        var b2 = bar;
    }
    else {
        var b = bar;
    }
}
class Elephant {
}
function is1d2(any) {
    return any[0] instanceof Array;
}
function Foo2(d1) {
    if (d1[0] instanceof Array) {
        var newd1 = d1;
    }
    else {
        var newd2 = d1;
    }
}
//# sourceMappingURL=t.js.map