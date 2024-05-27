setInterval(() => {
  let time = new Date();
  let fullTime = time.toLocaleTimeString();
  console.log(fullTime);

  //   let hours = time.getHours();
  //   let minuts = time.getMinutes();
  //   let seconds = time.getSeconds();
  //   let fullTime = `${hours.toString().length != 2 ? "0" + hours : hours}:${
  //     minuts.toString().length != 2 ? "0" + minuts : minuts
  //   }:${seconds.toString().length != 2 ? "0" + seconds : seconds}`;
  //   console.log(fullTime);
}, 1000);
