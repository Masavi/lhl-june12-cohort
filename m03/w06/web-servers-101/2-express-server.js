const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3001;

/**
 * Middlewares
 * add extra behaviour on ANY INCOMING REQUEST
 */
app.use((req, res, next) => {
  console.log('Incoming request! 🐸');
  req.date = new Date();
  return next();
});

// Common middlewares:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/**
 * These middlewares enable you to access REQ.BODY
 * req.body contains data submitted by the user. e.g. when user tries to login or register
 */

app.use(morgan('dev')); // Show extra info on any incoming request


/**
 * 1) Configuration / Behaviour of the server
 */
app.get('/', (req, res) => {
  res.send(`Time of req: ${req.date}. Hello, world!`);
});

app.get('/dogs', (req, res) => {
  res.send(`Time of req: ${req.date}. Here you WILL find dog pics...`);
});

/**
 * 2) Listening for incoming requests
 */
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));