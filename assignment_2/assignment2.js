// Exercise #1
// Write your solution below

var TrianglePiece = '';
for (var i = 0; i < 7; i++) {
  console.log(TrianglePiece += '#');
}
/* 
Write your explanation for Exercise #1 here
The loop runs 7 times and every time the result will be the previous value + 1, i.e. the variable gets updated.
*/





// Exercise #2
// Write your solution below
function isEven(n) {
      if (n % 2 == 0) {
    return 'The number is even!';
  } 
  else {
    return 'The number is odd!';
  }
}
console.log(isEven(13));
console.log(isEven(10));
/* 
Write your explanation for Exercise #2 here
Set a conditional (IF) using modulus operator to test whether a number is divisible another. If so,
the remainder will be '0' and the function will return "...even!". Set another condition (else) to
evaluate/return the result if the statement in the previous condition is false (odd).
The console.logs will call the function isEven and analyse, based on the conditionals, whether the 
numbers (13 and 10) are either true (even) or false (odd).
*/
