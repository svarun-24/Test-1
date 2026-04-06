// 8.  Capitalize Each Word  [7 Marks] 

// Write a function capitalizeWords(str: string): string that capitalizes the first letter of every word. 

// Example:  capitalizeWords("hello world")  →  "Hello World" 

function capitalizeWords(str: string): string {
    const words = str.split(" ");
    let result: string[] = [];
 
    for (let word of words) {
        const capitalized = word[0].toUpperCase() + word.slice(1);
        result.push(capitalized);
    }
 
    return result.join(" ");
}
 
console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("heLLo wOrld"));