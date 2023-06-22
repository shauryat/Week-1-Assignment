/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  console.log("1st function is running");
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(waitTwoSeconds()), 1000);
  });
}

function waitTwoSeconds() {
  console.log("2nd function is running");
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(waitThreeSeconds()), 2000);
  });
}

function waitThreeSeconds() {
  console.log("3rd Function is running");
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 3000);
  });
}

function calculateTime() {
  var start = Date.now();
  waitOneSecond().then(() => {
    var diff = Date.now() - start;
    diff = diff / 1000;

    console.log(`Promise chaining ending after ${diff} seconds`);
  });
}

calculateTime();
