function removeDuplicates(arr: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
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