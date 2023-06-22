/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function resolver(n) {
  console.log(`Resolving after ${n} seconds`);
  return n;
}

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(resolver(1)), 1000);
  });
}

function waitTwoSeconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(resolver(2)), 2000);
  });
}

function waitThreeSeconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(resolver(3)), 3000);
  });
}
// resolve or any other name in the first arguement is function that return whats inside it , incase the function is correctly resolved

function calculateTime() {
  var start = Date.now();

  const promises = [waitOneSecond(), waitTwoSeconds(), waitThreeSeconds()];

  Promise.all(promises).then(() => {
    var diff = Date.now() - start;
    diff = diff / 1000;
    console.log(`Time taken is ${diff} seconds`);
  });
}

calculateTime();
