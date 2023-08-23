-- Joins allows us to fetch data from different tables at the time,
-- by using pre-defined relationships between them.
-- Here's where PRIMARY KEY and FOREIGN KEY become related.

SELECT *
FROM books
JOIN authors ON authors.id = books.author_id;

SELECT books.id, books.title, books.year, authors.name
FROM books
JOIN authors ON authors.id = books.author_id;