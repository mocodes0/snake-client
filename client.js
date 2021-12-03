const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  //Interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server. Thank you for your patience.");
    conn.write('Name: MOE');
    //setInterval(() => {
    
  });
  return conn;
};

module.exports = connect;
