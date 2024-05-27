import { log } from "console";
import fs from "fs";

async function writeFileBiro(text) {
  try {
    await fs.promises.writeFile("likhdo.txt", text);
  } catch (error) {
    log(error);
  }
  log("after the file written");

  try {
    const content = await fs.promises.readFile("likhdo.txt", "utf-8");
    log(content);
  } catch (error) {
    log(error);
  }
  log("after reading");
}

writeFileBiro("main hun jian, main hun nagin, hame hun na, hanuman ji");
