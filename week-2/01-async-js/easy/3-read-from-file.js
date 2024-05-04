import fs from "fs";
function billion() {
  let sum = 0;
  for (let i = 0; i < 100000; i++) {
    sum += i;
  }
  return sum;
}
async function readFilesBiro() {
  let content = await fs.promises.readFile("3-read-from-file.md", "utf-8");
  console.log(content);
  console.log(billion());
}
readFilesBiro();
