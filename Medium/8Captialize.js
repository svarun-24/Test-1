function capitalizeWords(str) {
    var words = str.split(" ");
    var result = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var capitalized = word[0].toUpperCase() + word.slice(1);
        result.push(capitalized);
    }
    return result.join(" ");
}
console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("heLLo wOrld"));
