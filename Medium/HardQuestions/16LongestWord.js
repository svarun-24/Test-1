// 16.  Longest Word in a Sentence  [5 Marks] 
// Write a function longestWord(sentence: string): string that returns the longest word in the given sentence. 
// Example:  longestWord("I love TypeScript")  →  "TypeScript" 
function longestWord(sentence) {
    var words = sentence.split(" ");
    var longest = "";
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord("I love TypeScript"));
