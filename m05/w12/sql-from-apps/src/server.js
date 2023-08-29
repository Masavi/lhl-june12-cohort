const express = require('express');
const Directors = require('../database/directors');
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const PORT = 4000;

// Get all directors
app.get("/api/directors", (req, res) => {
  Directors.getAllDirectors()
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((error) => {
      res.status(500).send("There was an error on the server");
    })
});

// Get one director by id
app.get("/api/directors/:idDirector", (req, res) => {
  const id = req.params.idDirector;
  Directors.getDirectorById(id)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((error) => {
      res.status(500).send("There was an error on the server");
    })
});

// Add one director
app.post("/api/directors", (req, res) => {
  Directors.addDirector(req.body)
    .then((result) => {
      res.status(201).json(result.rows);
    })
    .catch((error) => {
      res.status(500).send("There was an error on the server");
    })
});


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
