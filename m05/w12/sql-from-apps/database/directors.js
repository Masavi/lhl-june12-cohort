const pool = require('./pool');

const getAllDirectors = () => {
  return pool.query("SELECT * FROM directors;");
}

const getDirectorById = (id) => {
  const text = "SELECT * FROM directors WHERE director_id = $1;";
  const values = [id];
  return pool.query(text, values);
}

const addDirector = (body) => {
  const text = 'INSERT INTO directors(first_name, last_name, country) VALUES($1, $2, $3) RETURNING *;'
  const values = [body.first_name, body.last_name, body.country];

  return pool.query(text, values);
}

module.exports = {
  getAllDirectors,
  getDirectorById,
  addDirector,
}
