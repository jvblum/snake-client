const net = require("net");
const cfg = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: cfg.IP,
    port: cfg.PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server!👌");
    conn.write(`Name: ${cfg.name}`);
  });
  conn.on("data", (data) => {
    console.log(data)
  });

  return conn;
};


// console.log("Connecting ...");
// connect();

module.exports = connect;