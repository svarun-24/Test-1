
// 11.  Sum Using Rest Parameters  [7 Marks] 

// Write a function sumAll(...nums: number[]): number that accepts any number of arguments and returns their sum. 

// Example:  sumAll(1, 2, 3, 4)  →  10   |   sumAll(5, 10)  →  15 

function SumUsingRest(... nums: number[]): number
{
    let sum=0;
    for(let arr of nums)
    {
        sum+=arr;
    }
    return sum;
}

console.log(SumUsingRest(1,2,3,4,5,6,7,8));