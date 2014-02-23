// tcp-argv.js
// connect to tcp host, port & send msg.
// use l for 127.0.0.1

//get net
var net = require('net'),
//get host argv
host = process.argv[2],
//get port argv
port = process.argv[3],
//get anything after port argv aka message
msg = process.argv.slice(4),
//set host argv as 127.0.0.1 if host argv = l
addr = host.replace('l', '127.0.0.1');
//connect to the host + port
c = net.connect(port, host, function() {
  //return when connection established to the console
  console.log('est');
  c.on('end', function() {
  	//return when disconected to the console
    console.log('end');
  });
  //change the msg argv to a string
  msg = msg.join(" ")
  //write the msg string to the host
  c.write(msg);
  //return when msg is sent to the console
  console.log('sent');
  //disconnect from the host
  c.end();
});