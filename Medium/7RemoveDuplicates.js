function removeDuplicates(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var isDuplicate = false;
        for (var j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 3]));
