// Stores the active TCP connection object.
let connection;


/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = (input) => {
  //translate keyboard input number to string
  if (input === '\u0003') {
    process.exit();
  } else if (input === 'a') {//left
    connection.write('Move: left');
  } else if (input === 'w') {//up
    connection.write('Move: up');
  } else if (input === 'd') {//right
    connection.write('Move: right');
  } else if (input === 's') {//down
    connection.write('Move: down');
  }
};


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  //listen for user input
  process.stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};



module.exports = {setupInput};