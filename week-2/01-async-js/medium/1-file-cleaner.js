import fs from "fs";

const readFile = async () => {
  try {
    const content = await fs.promises.readFile("1.txt", "utf-8");
    console.log(content);

    const regex = /\ {2,}/g;
    if (content.matchAll(regex)) {
      console.log("more spaces are hai");
      let nonExtraSpaceContent = content.trim().replace(regex, " ");
      console.log(nonExtraSpaceContent);
      await fs.promises.writeFile("1.txt", nonExtraSpaceContent);
    }
  } catch (error) {
    console.log(error);
  }
};

readFile();
