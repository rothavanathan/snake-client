
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = (input) => {
  //translate keyboard input number to string
  console.log(input);
  if (input === '\u0003') {
    process.exit();
  } else if (input === '37') {//left
    conn.write(`Move: up`);
  } else if (input === '^[[A') {//up
    conn.write(`Move: up`);
  } else if (input === '^[[C') {//right
    conn.write(`Move: right`);
  } else if (input === '^[[B') {//down
    conn.write(`Move: down`);
  };
};


const setupInput = function() {
  const stdin = process.stdin;
  const stdout = process.stdout;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  //listen for user input
  process.stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
}



module.exports = {setupInput};