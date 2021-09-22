// Snek Server IP: 135.23.223.133
// Snek Port: 50542

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("something happens", data)
  });
  

  console.log("Connecting ...");

  return conn;
};


// console.log("Connecting ...");
connect();

module.exports = connect;