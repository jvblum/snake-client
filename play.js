// Snek Server IP: 135.23.223.133
// Snek Port: 50542

const net = require("net");
const client = require("./client");
const input = require("./input");

console.log("Connecting ...");
input();
client();