const net = require('net');
const {IP, PORT} = require('./constants')


/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    // host: 'localhost',
    // port: 50541
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect',() => {
    console.log(`Connected to game server!`);
    conn.write(`Name: POO`);
  });

  return conn;
};

module.exports = {connect};