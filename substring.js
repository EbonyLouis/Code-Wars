INSTRUCTIONS:
Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which 
should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2



function nthChar(words){
  let n = 0
  let empty = []
  for(let i =0; i<words.length; i++){
    let newWord = words[i].split("")
       n = i 
       empty.push(newWord[n])                
  }
   
 return empty.join("")
}
