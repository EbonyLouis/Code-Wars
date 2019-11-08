// Your task is to sum the differences between
// consecutive pairs in the array in descending order.
//
// For example: sumOfDifferences([2, 1, 10]) Returns 9
//
// Descending order: [10, 2, 1]
//
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9



function sumOfDifferences(arr) {
let reversedArray = arr.reverse()
for(let i =0; i < reversedArray.length; i++){
  let sum = reversedArray[i] - reversedArray[i+1] + reversedArray[i+1] - reversedArray[i+2]
return sum
}
}
