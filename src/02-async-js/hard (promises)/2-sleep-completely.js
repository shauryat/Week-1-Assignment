/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  seconds = seconds * 1000;
  const start = Date.now();
  while (Date.now() - start < seconds) {
    console.log("sleeping ...");
    console.clear();
  }

  for (let i = 0; i < 10; i++) console.log(i);
}

sleep(5);
