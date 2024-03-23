
# Dependencies
To run this application properly on your local machine, you'll need Java 17 and MySQL installed. All other dependencies are already defined in the pom.xml file.

# Instructions
1. Make sure environment variables are properly set (this should already be the case)
2. Log into your MySQL console
3. Create a database named rdelivery
4. Clone the project
5. Open the project in VS Code
6. Edit your database configuration file (src/main/resources/application.properties)
    1. Edit the username, password and database name as required
7. Execute the main function
    1. Open the RocketFoodApplication.java file and run it (on the top right part of VS Code, you should see an arrow pointing to the right, when you hover over it, you see a “Run Java” tooltip. Click it.
    2.  You should see a line similar to this at the end of the execution: `INFO 24016 --- [ main] c.r.rocketFood.RocketFoodApplication : Started RocketFoodApplication in 2.726 seconds (process running for 2.963)`

    ----------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


   
    ________________________________>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
    
    MANY - TO -ONE RELATIONSHIPS

    employees, and users, have a relation many - to- one, because many employeers can be related with one user. (we can see that because in employeers table we have a foreign key that references users table in the -id column).

    customers and users, have a relation many - to - one because many customers can be related with one user. (we can see that because in customers table we have a foreign key that references users table in the -id column).

    products, and restaurants, have a relation many -to one, because many products can be related with one restaurant. (we can see that because in products table we have a (restaurant_id) foreign key that references restaurants table in the -id column).

    orders, and restaurants, have a relation many to one, because many orders can be related with one restaurant. (we can see that because in orders table we have a (restaurant_id) foreign key that references restaurants table in the -id column).

    ONE -TO- ONE RELATIONSHIPS

    employees and adresses, each employee can have one address. (we can see that because in employees table we have a (address_id) foreign key that references adresses table in the -id column).
    restaurant and address, each restaurant can have one address. (we can see that because in restaurants table we have a (address_id) foreign key that references adresses table in the -id column).

    MANY-TO-MANY RELATIONSHIPS

    there is a potential many -to many, because in product-orders, we can link the orders table, and the products table. Each order can have many products, and each product can be present in many orders. 

    -------------->>>>>>>>>>>>>>>---------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>----------------------->>>>>>>>>>>>>>>

    

"SQL is a programming language, or more precisely, a domain-specific language used for manipulating databases. It is designed to perform specific queries for database management (primarily relational).

The difference between MySQL and SQLite lies in their intended use cases. MySQL is designed for more complex environments, allowing for more difficult operations across multiple databases, while SQLite is a portable version with a storage system that makes it simpler, lighter, and more suitable for desktop environments or simpler applications.

Primary keys are used to uniquely identify a record in a table. They allow for the identification of a unique element or object contained within the database. Foreign keys, on the other hand, are used to relate an element of one table to another. They are typically within an element, referencing another existing object within the same database but in other tables. For example, consider a user with a primary key identifier (e.g., 03) and whose specific address, with a foreign key, is (01). This (01) leads to an address table, where (01) further specifies numbers, streets, municipalities, states, districts, GPS location, or some other element.

In a database, tables may have relationships such as many-to-many, one-to-many, or one-to-one. For instance, in an e-commerce database, a customer may have multiple orders (one-to-many), and each order may contain multiple products (also one-to-many). Additionally, a product may belong to multiple categories, while each category may contain multiple products (many-to-many). These relationships help establish the structure and integrity of the database."

