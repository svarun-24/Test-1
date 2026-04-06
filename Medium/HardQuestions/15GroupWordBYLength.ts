// 15.  Group Words by Length  [5 Marks] 

// Write a function groupByLength(words: string[]): object that groups words by their character length. 

// Example:  groupByLength(["hi", "cat", "dog", "go"])  →  { 2: ["hi", "go"], 3: ["cat", "dog"] }

// Pseudo code
// write a function accepts parameter of type Array of string
// split the array
// check the length of the array and store if length is 2 print that elements and same if length is 3 print the elements

function groupByLength(words: string[])
{
    let arr1: string[] = [];
    let arr2: string[] = [];
    for(let i=0;i<words.length;i++)
    {
        if(words[i].length === 2)
        {
            arr1.push(words[i]);

        }
        if(words[i].length === 3)
        {
            arr2.push(words[i]);
        }
    }

    console.log(arr1);
    console.log(arr2);
}
groupByLength(["hi", "cat", "dog", "go"]);