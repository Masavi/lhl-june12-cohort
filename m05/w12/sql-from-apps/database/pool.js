const { Pool } = require('pg');
const pool = new Pool({
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
pool.connect()
  .then(result => console.log('Connection successful!'))
  .catch(error => console.log('There was an error connecting to the database:', error));

// pool.query('SELECT * FROM directors;')
//   .then(result => console.log('Query result:', result.rows))
//   .catch(error => console.log('Error on the query:', error));

module.exports = pool;
