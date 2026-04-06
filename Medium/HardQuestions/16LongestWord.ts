// 16.  Longest Word in a Sentence  [5 Marks] 

// Write a function longestWord(sentence: string): string that returns the longest word in the given sentence. 

// Example:  longestWord("I love TypeScript")  →  "TypeScript" 

function longestWord(text: string): string {
  const words = text.split(" ");
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("I love TypeScript"));