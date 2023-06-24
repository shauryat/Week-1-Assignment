const twoDigit = (num) => {
  return num.toString().padStart(2, "0");
};

const updater = (Hour, Minute, Second) => {
  console.clear();

  Second++;
  if (Second === 60) {
    Second = 0;
    Minute++;
  }
  if (Minute === 60) {
    Minute = 0;
    Hour++;
  }

  let period = "AM";
  let Hour12 = Hour;
  if (Hour >= 12) {
    period = "PM";
    Hour12 = Hour12 - 12;
  }

  let HH = twoDigit(Hour);
  let MM = twoDigit(Minute);
  let SS = twoDigit(Second);
  let H12 = twoDigit(Hour12);

  console.log(HH, ":", MM, ":", SS);
  console.log(H12, ":", MM, ":", SS, period);
  setTimeout(updater, 1000, Hour, Minute, Second);
};

const main = () => {
  const currentDate = new Date();

  const _Hour = currentDate.getHours();
  const _Minute = currentDate.getMinutes();
  const _Second = currentDate.getSeconds();
  updater(_Hour, _Minute, _Second);
};

main();
