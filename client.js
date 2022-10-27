const { Socket } = require("dgram");
const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: "192.168.1.52",
    port: 50541
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