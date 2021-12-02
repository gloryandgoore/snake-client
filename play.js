const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
conn.on("connect", () => {
  conn.write("Caseyann")
});
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log('Server says: ', data);
  });
  return conn;
};

console.log("Connecting ...");
connect();





