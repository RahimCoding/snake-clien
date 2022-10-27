const { Socket } = require("dgram");
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host : IP,
    port : PORT
  });

  conn.on("connect", () => {
    console.log("you've been connected")
    console.log("sucessfully connected to game server")
    conn.write("Name: RHJ");
    // interpret incoming data as text
    conn.setEncoding("utf8");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
}
module.exports = {connect};