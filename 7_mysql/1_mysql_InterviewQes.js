//---> 1. What is MySQL?
// MySQL is an open-source relational database management system, it will use the structured query language to manage the data.
// It is widely used for web applications.
// It is fast, reliable, and easy to use.
// It is used for storing and retrieving data for various applications.
//------------------------------------------------------------

// 🟡 2. Why do we use MySQL?
// MYSQL is widely used because it is free and open-source.
// It is easy to use and has a large community for support.
// It is compatible with many programming languages and platforms.
// It provides good performance and scalability for small to medium-sized applications.
//------------------------------------------------------------

// 🟡 3. Difference between SQL & MYSQL?
// SQL is a language used for writing queries and managing databases, while MYSQL is a database it will use the SQL language to manage the data.
// SQL is used to perform operations on the data, while MYSQL is used to store and retrieve data from the database.
// SQL is a standard language, while MYSQL is a specific implementation of that language.
//------------------------------------------------------------

// 🟡 4. What is the difference between SQL and NoSQL?
// SQL databases are RDMS and use structured query language for defining and manipulating data. NoSQL databases are non-relational it will not use SQL language.
//------------------------------------------------------------

// 🟡 5. What is the difference between MySQL and MongoDB?
// MySQL is a relational database management system, while MongoDB is a NoSQL database.
// MySQL uses tables to store data, while MongoDB uses collections and documents.
// MySQL is better for structured data with relationships, while MongoDB is better for unstructured or semi-structured data.
// MySQL is more suitable for complex queries and transactions, while MongoDB is more suitable for flexible and scalable applications.
//------------------------------------------------------------

// 🟡 6. What are the different types of joins in MySQL?
// JOIN: Joins are used to combine data from multiple tables based on a common column. It allows us to retrieve data from multiple tables.
// There are four types of joins in MySQL:
// 1. INNER JOIN: Returns records that have matching values in both tables.
// 2. LEFT JOIN: Returns all records from the left table and the matched records from the right table. If there is no match, NULL values are returned for columns from the right table.
// 3. RIGHT JOIN: Returns all records from the right table and the matched records from the left table. If there is no match, NULL values are returned for columns from the left table.
// 4. FULL OUTER JOIN: Returns all records when there is a match in either left or right table. If there is no match, NULL values are returned for columns from the table without a match.
//------------------------------------------------------------

// 🟡 7. What is a primary key in MySQL?
// Primary key is a unique identifier in each table.
// Use this we can uniquely identify each record from the table.
// It must contain unique values and cannot contain NULL values.
//------------------------------------------------------------

// 🟡 8. What is a foreign key in MySQL?
// Foreign key is a field in one table that refers to the primary key in another table.
// It is used to establish a link between the two tables.
// It helps maintain referential integrity between the tables.
//------------------------------------------------------------

// 🟡 9. What is an index in MySQL?
// Index is a database object, use this we can speed up the retrieval of data from the table.
// Instead of searching the full table, it will search the index and get the data.
// ------------------------------------------------------------

// 🟡 10. What is a stored procedure in MySQL?
// Stored procedure means set of SQL statements stored in the database, this we can reuse whenever we needed.
// Uses: Reusability: Same logic we can use many places.
//       Performance: Faster because it runs inside DB.
//       Maintainability: Logic stays in one place.
//  Ex:
CREATE PROCEDURE GetCustomers(IN custId INT)
BEGIN
SELECT * FROM customers WHERE customer_Id = custId;
END;
// -------------------------------------------------------------



