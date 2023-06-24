/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function resolverFn(time : number): string {
  const ans = "Running after " + time + " seconds";
  return ans;
}

function promiseFn(time : number): Promise<unknown> {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000, time);
  });
}
function wait(n): Promise<string> {
  return promiseFn(n).then(resolverFn);
}

wait(3).then((returnValue) => {
  console.log(returnValue);
});
