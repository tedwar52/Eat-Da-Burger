**Eat Da Burger**

**_Description_**

An MVC web application. Utilizes Express, Handlebars, and MySQL. A user can add burgers to an existing burgerdb, and then "eat" those burgers.

**_Table of Contents_**

- [Installation](#Installation)
- [Usage](#Usage)
- [More](#More)

<a name="Installation">**_Installation_**</a>

In order to run this application, you will need to install Express by entering:" npm install express " in your node command line terminal. Also install Express-Handlebars by installing " npm install express-handlebars " and MySQL by installing " npm install mysql ".

Before using this app, be sure to create the burgers_db in MySQL. This can be done in the terminal. Make sure you are in the "db" folder. Start the MySQL command line tool by running "mysql -u root -p". After logging in, you will be in the mysql command line. Enter "source schema.sql" to create the database. Run "source seeds.sql" to fill that database with the seeds.

It's not styled, but here is the gist
![Image of Homepage]("/public/assets/eat.png");

<a name="Usage">**_Usage_**</a>

In the node command line, enter "node server" to get the server up and running! On the webpage, utilize the "submit" and "devour" buttons.

<a name="More">**_See more about this_**</a>

[Github Repo](https://github.com/tedwar52/Eat-Da-Burger)  
[Deployed on Heroku](https://warm-wave-56497.herokuapp.com/)
