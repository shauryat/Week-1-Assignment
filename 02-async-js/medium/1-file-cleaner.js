const fs = require("fs/promises");

const removeExtraWhiteSpace = (str) => {
  // Remove leading and trailing whitespace
  str = str.trim();

  // Replace multiple consecutive whitespace characters with a single space
  str = str.replace(/\s+/g, " ");

  return str;
};

const main = async () => {
  const src = "./hello_world.txt";

  try {
    const data = await fs.readFile(src, { encoding: "utf-8" });
    console.log("original data", data);

    const newData = removeExtraWhiteSpace(data);
    console.log("new data", newData);

    await fs.writeFile(src, newData);
    console.log("File successfully updated!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

main();

//  The `\s+` pattern matches one or more consecutive white space characters.
//   `\s`: It matches any white space character, including spaces, tabs, and line breaks.
//   `+`: It matches one or more occurrences of the preceding pattern, in this case, one or more consecutive white space characters.
//   `/g`: It is a flag that indicates to perform a global search, meaning it replaces all occurrences of the pattern, not just the first one.

// `' '`: It is the replacement value. In this case, it is a single space character.

// So, the line of code replaces any occurrence of one or more consecutive white space characters in the `str` string with a single space character. This effectively removes the extra white spaces from the string.
