const timeNodes = document.querySelectorAll("[data-time]");
console.log(timeNodes);

const timesArrey = [...timeNodes];

const seconds = timesArrey
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

// console.log(mins, secs);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log("hours:", hours, "minutes:", minutes, "seconds:", secondsLeft);
