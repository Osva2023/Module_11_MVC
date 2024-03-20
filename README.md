
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

    Codeboxx.SQL2024
   
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

    
