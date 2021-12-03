const { connect } = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function (cb) {
    stdin.on('data', data => {
      cb(data)
    })
  }
  return handleUserInput;
}

const handler = setupInput()
let conn = connect();

handler(input => {
      if (input === "w") {
        conn.write("Move: up");
      }
      if (input === 's') {
        conn.write("Move: down");
      }
      if (input === 'a') {
        conn.write("Move: left");
      }
      if (input === 'd') {
      conn.write("Move: right");
      }
      if(input === '\u0003'){
      process.exit();
      }
      if (input === "y") {
        conn.write("Say: Yessir!");
      }
    })

    module.exports = {setupInput};
    