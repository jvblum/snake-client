const { clear } = require("console");

let connection;

const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = key => {
  let com;
  const validKeys = ['\u0003', ',', 'a', 'o', 'e'];
  if (key === '\u0003') process.exit();

  if (key === ",") com = "Move: up";
  if (key === "a") com = "Move: left";
  if (key === "o") com = "Move: down";
  if (key === "e") com = "Move: right";
  if (key === "1") com = "Say: no one will know i'm"
  if (key === "2") com = "Say: don't even";
 
  connection.write(com);

  // if (!isNaN(key)) console.log(key); // test
};

module.exports = setupInput;