function FactorsOfNumbers(num: number): number[]
{
    let result: number[] = [];

    for(let i=0;i<=num;i++)
    {
        if(num%i === 0)
        {
            result.push(i);
        }
    }

    return result;
}

console.log(FactorsOfNumbers(6));