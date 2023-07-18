const http = require('http');
const server = http.createServer();
const PORT = 3000;

/**
 * 1) Configurate the behaviour or...
 *    what is the server doing when receiving an http request?
 */
server.on('request', (request, response) => {
  console.log('Request method:', request.method);
  console.log('Request url:', request.url);

  if (request.method === 'GET' && request.url === '/') {
    response.write('Welcome to the homepage of my website!');
  }

  else if (request.method == 'GET' && request.url === '/dogs') {
    response.write("Here I could show you pics of my dogs... but I dont have picture :'(")
  }

  else {
    response.write('404 PAGE NOT FOUND');
  }

  // response.write('Hello, world! 🌎');
  response.end();
});

/**
 * 2) Start listening for incoming requests
 *    on a specific PORT number
 *    Note: always use port numbers above 3000
 */
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
// Listening on localhost:3000
// Listening on 127.0.0.1:3000