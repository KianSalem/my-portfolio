-- Creating the database.
CREATE DATABASE salary_analysis;

-- RUN BEFORE OTHER QUERIES - tells database which scheme to work with.
USE salary_analysis;

-- Creating the table.
CREATE TABLE ds_salaries (
  id INT,
  work_year INT,
  experience_level VARCHAR(2),
  experience_desc VARCHAR(15),
  employment_type VARCHAR(2),
  job_title VARCHAR(100),
  salary DECIMAL(15,2),
  salary_currency VARCHAR(10),
  salary_in_usd DECIMAL(15,2),
  employee_residence VARCHAR(10),
  remote_ratio INT,
  company_location VARCHAR(10),
  company_size VARCHAR(1),
  role_category VARCHAR(20)
);

-- Import data from CSV to populate the table.
LOAD DATA LOCAL INFILE '/Users/kians./Documents/my-portfolio/projects/Data/Salary_Analysis/ds_salaries_cleaned.csv'
INTO TABLE ds_salaries
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(id, work_year, experience_level, experience_desc, employment_type, job_title, salary, salary_currency, salary_in_usd, employee_residence, remote_ratio, company_location, company_size, role_category);

-- Testing that the table was properly populated by the included data.
SELECT * FROM ds_salaries LIMIT 10;

-- (DEBUGGING) Show the role categories as hex values to look for hidden spaces/line breaks/tabs.
SELECT role_category, HEX(role_category) AS hex_value
FROM ds_salaries
WHERE role_category LIKE '%Automation%' OR role_category LIKE '%Data%';

-- (DEBUGGING) Identified '0D' at the end, meaning carriage return characters.

-- (DEBUGGING) Deleting the hidden carriage characters
UPDATE ds_salaries
SET role_category = REPLACE(role_category, '\r', '');

-- The actual data-related queries:

-- Average Salary in USD by Role Category (Data Analyis jobs Vs. Automation-Focused)
SELECT role_category, AVG(salary_in_usd) AS average_salary_usd
FROM ds_salaries
WHERE role_category IN ('Automation-Focused', 'Data Analysis')
GROUP BY role_category;

-- Average Salary by Experience Level within Each Role Category
SELECT role_category, experience_level, AVG(salary_in_usd) AS average_salary_usd
FROM ds_salaries
WHERE role_category IN ('Automation-Focused', 'Data Analysis')
GROUP BY role_category, experience_level
ORDER BY role_category, FIELD(experience_level, 'EN', 'MI', 'SE', 'EX');

-- Salary Distribution by Remote Ratio
SELECT role_category, remote_ratio, AVG(salary_in_usd) AS average_salary_usd
FROM ds_salaries
WHERE role_category IN ('Automation-Focused', 'Data Analysis')
GROUP BY role_category, remote_ratio
ORDER BY role_category, remote_ratio;

-- Top Countries by Average Salary for Each Role Category
SELECT role_category, company_location, AVG(salary_in_usd) AS average_salary_usd, COUNT(*) AS num_positions
FROM ds_salaries
WHERE role_category IN ('Automation-Focused', 'Data Analysis')
GROUP BY role_category, company_location
HAVING num_positions > 5
ORDER BY role_category, average_salary_usd DESC;