import { readFile } from "fs/promises";

const main = async () => {
  const src = "./hello_world.txt";
  try {
    const data = await readFile(src, { encoding: "utf-8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

main();
