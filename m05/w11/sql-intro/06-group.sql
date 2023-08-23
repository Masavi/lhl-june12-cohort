-- It is very common to combine AGGREGATE FUNCTIONS with GROUP BYs
-- Group authors and the books they have written
SELECT authors.name, COUNT(books.id)
FROM books
JOIN authors ON authors.id = books.author_id
GROUP BY authors.name;

-- Grouping by more than one column is possible
SELECT authors.name, year, COUNT(books.id)
FROM books
JOIN authors ON authors.id = books.author_id
GROUP BY authors.name, year
ORDER BY year;

-- Not as common, but we can also use GROUP BY without using AGGREGATE FUNCTIONS
SELECT books.year
FROM books
JOIN authors ON authors.id = books.author_id
GROUP BY books.year;