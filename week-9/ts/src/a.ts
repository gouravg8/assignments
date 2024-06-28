let n = 1;
console.log(n);

function delayFunction(fn: () => void) {
  setTimeout(fn, 1000);
}

delayFunction(() => {
  console.log("hii there");
});
