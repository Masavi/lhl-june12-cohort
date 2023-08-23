-- Filter books between 2010 and 2015
SELECT *
FROM books
WHERE year >= 2010
AND year <= 2015
-- We can order by alphabet as well
ORDER BY title
LIMIT 2;

-- Filter books between 2010 and 2015
SELECT *
FROM books
WHERE year >= 2010
AND year <= 2015
-- We can order by alphabet as well
ORDER BY title
LIMIT 2
OFFSET 6;