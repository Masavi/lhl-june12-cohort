const net = require('net');
const server = net.createServer();

/**
 * IP ADDRESS: 127.0.0.1 -> localhost -> Identify a device in a network
 * PORT NUMBER: locate a program inside a device
 */
const PORT = 3000;

server.on('connection', (client) => {
  console.log('Connection with a client has been stablished!');
  console.log(client);

  client.on('end', () => {
    console.log('Client just left')
  })
})

server.on('error', () => {
  console.log('An error has occured!!');
})

server.listen(PORT, () => console.log('Server listening on port 3000'));