-- GET A LIST OF ALL THE AUTHORS WHO HAVE WRITTEN AT LEAST ONE BOOK IN 2003

SELECT authors.name FROM authors
JOIN books ON authors.id = books.author_id
WHERE books.year = 2003
GROUP BY authors.name;

-- GET THE AMOUNT OF BOOKS WRITTEN BETWEEN 2010-2020

SELECT COUNT(*) FROM books
WHERE year >= 2010 AND year <= 2020;