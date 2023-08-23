-- Filter books between 2010 and 2015
SELECT *
FROM books
WHERE year >= 2010
AND year <= 2015
-- We can add an ORDER clause to decide how we get the results
ORDER BY year DESC;


-- Filter books between 2010 and 2015
SELECT *
FROM books
WHERE year >= 2010
AND year <= 2015
-- We can order by alphabet as well
ORDER BY title;