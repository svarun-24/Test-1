// 13.  First Non-Repeating Character  [5 Marks] 

// Write a function firstUnique(str: string): string that returns the first character that does not repeat. 

// Example:  firstUnique("aabbc")  →  "c"   |   firstUnique("abcd")  →  "a" 

function firstUnique1(str: string): string {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return "";
}
console.log(firstUnique1("aabbc"));
console.log(firstUnique1("abcd"));