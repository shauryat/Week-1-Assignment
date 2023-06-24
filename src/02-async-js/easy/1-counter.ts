let counter_  = 0;

function updateCounter() : void {
  counter_++;
  console.log(counter);
}

setInterval(updateCounter, 1000);

export {}