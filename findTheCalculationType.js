// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".

calcType = (a,b,res) =>
  a+b === res ? 'addition':
  a-b === res ? 'subtraction':
  a*b === res ? 'multiplication' :
  a/b === res ? 'division':
null;
// refactor with ternary operator

//original with switch case
function calcType(a, b, res) {
  let type = "";
  switch(res){
    case a+b:  
    type = "addition"
    break;
    case a*b:
    type = "multiplication"
    break;
    case a-b:
    type = "subtraction"
    break;
    case a/b:
    type = "division"
    break;
  }
  return type
}
