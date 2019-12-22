INSTRUCTIONS: Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.


function distinct(arr) {
  let newArr = []; 
  
  for(let i = 0; i < arr.length; i++){
    if(!newArr.includes(arr[i])){
      newArr.push(arr[i]);
    }
}
return newArr;
}
