-- Aggregation functions output a calculation.
-- Remember that when using aggregate functions, the way that you will use
-- other clauses is going to change.

SELECT COUNT(*) FROM books;

SELECT COUNT(*)
FROM books
WHERE year >= 2010
AND year <= 2015;

SELECT MAX(year) FROM books;
SELECT MIN(year) FROM books;