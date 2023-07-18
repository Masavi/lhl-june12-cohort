const express = require('express');
const app = express();
const PORT = 4200;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // here you could fetch data from a database or another server
  const templateVars = {
    first_name: 'Angela',
    last_name: 'Zhou',
    dog: true,
  }
  res.render('homepage', templateVars);
});

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`);
});