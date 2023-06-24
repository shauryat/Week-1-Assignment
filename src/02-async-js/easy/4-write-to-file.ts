const fs = require("fs/promises");

const main = async () => {
  try {
    const src = "./write_here.txt";
    const content = "Some content huauh";
    await fs.writeFile(src, content);
  } catch (err) {
    console.log(err);
  }
};

main();
