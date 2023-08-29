const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'lhl',
  password: 'admin',
  // port: 5432,
});

/* CALLBACKS */
// client.connect((error, result) => {
//   console.log('Error:', error);
//   console.log('Result:', result);
// });

/* PROMISES */
client.connect()
  .then(result => console.log('Connection successful!'))
  .catch(error => console.log('There was an error connecting to the database:', error));

client.query('SELECT * FROM directors;')
  .then(result => console.log('Query result:', result.rows))
  .catch(error => console.log('Error on the query:', error))
  .finally(() => client.end());

