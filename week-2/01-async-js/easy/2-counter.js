let i = 1;
function timer(n) {
  console.log("Counter:", i);
  if (i < n) setTimeout(() => timer(n--), 1000);
  i++;
}
timer(10);
