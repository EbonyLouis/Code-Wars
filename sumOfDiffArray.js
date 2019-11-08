// Your task is to sum the differences between
// consecutive pairs in the array in descending order.
//
// For example: sumOfDifferences([2, 1, 10]) Returns 9
//
// Descending order: [10, 2, 1]
//
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9



function sumOfDifferences(arr) {
let sum =0
let reversedArray = arr.sort(function(a, b){return b-a});
for(let i =0; i < reversedArray.length-1; i++){
  sum += (reversedArray[i] - reversedArray[i+1])
}
return sum
}
