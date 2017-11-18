"use strict";
class FindMaxNumber {
    constructor() {
        this.numArray = [1, 2, 92, 7, 8, 91, 9, 3, 7, 5];
    }
    Max() {
        let curMaxValue = 0;
        let arrCompareMaxValue = 0;
        let arr = this.numArray;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= arr[i + 1]) {
                arrCompareMaxValue = arr[i];
            }
            else {
                arrCompareMaxValue = arr[i + 1];
            }
            if (curMaxValue < arrCompareMaxValue) {
                curMaxValue = arrCompareMaxValue;
            }
        }
        return curMaxValue;
    }
}
console.log(new FindMaxNumber().Max());
