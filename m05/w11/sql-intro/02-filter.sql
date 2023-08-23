-- To filter in SQL, we use the WHERE clause

-- Filtering books written after 2010
SELECT * FROM books WHERE year > 2010;

-- Filtering books written after 2010 or in 2010
SELECT * FROM books WHERE year >= 2010;

-- Filter books between 2010 and 2015
SELECT *
FROM books
WHERE year >= 2010
AND year <= 2015;