/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function resolverFn(time) {
  const ans = "Running after " + time + " seconds";
  return ans;
}

function promiseFn(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000, time);
  });
}
function wait(n) {
  return promiseFn(n).then(resolverFn);
}

wait(3).then((returnValue) => {
  console.log(returnValue);
});
