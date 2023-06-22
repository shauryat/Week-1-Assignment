/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function sum(n) {
  let ans = 0;

  for (let i = 1; i <= n; i++) ans += i;
  return ans;
}

function timeTaken(n, callFn) {
  let start = Date.now();
  sum(n);
  let timeTaken = Date.now() - start; // ans in milliseconds
  timeTaken = timeTaken / 1000;

  return timeTaken;
}
function calculateTime(n) {
  console.log(timeTaken(100, sum));
  console.log(timeTaken(100000, sum));
  console.log(timeTaken(1000000000, sum));
}

calculateTime();
