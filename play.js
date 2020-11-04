const net = require('net');
const {connect} = require('./client');
const {setupInput} = require('./input');


/**
 * Establishes connection with the game server
 */
console.log('Connecting ...');
const conn = connect();
setupInput();


const moveOnce = (direction) => {
  conn.write(`Move: ${direction}`)
}

const move = (direction) => {
  setInterval(() => moveOnce(direction), 50);
}



