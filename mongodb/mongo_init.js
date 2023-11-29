// create a user
db.runCommand(
    {
      createUser: "boyia",
      pwd:'002780', 
       roles: ["readWrite","dbAdmin"], 
      });

//create a db
use scrap

//create a collection 
db.createCollection('pollution')

