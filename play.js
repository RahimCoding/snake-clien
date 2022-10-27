const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.1.52",
    port: 50541
  });
  conn.on("connect", () => {
    console.log("you've been connected")
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();