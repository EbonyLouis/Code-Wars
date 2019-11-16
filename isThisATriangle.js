// Instructions: Implement a method that accepts 3 integer values
// a, b, c. The method should return true if a triangle can be built with
// the sides of given length and false in any other case.
//
// (In this case, all triangles must have surface greater than 0 to be accepted).


function isTriangle(a,b,c){
let sideSum1 = a+b
let sideSum2 = b+c
let sideSum3 = a+c
if(sideSum1 > c && sideSum2 > a && sideSum3 > b ){
return true;
}else{
   return false;
}
}
