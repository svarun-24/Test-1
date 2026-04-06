function SumUsingRest() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var arr = nums_1[_a];
        sum += arr;
    }
    return sum;
}
console.log(SumUsingRest(1, 2, 3, 4, 5, 6, 7, 8));
