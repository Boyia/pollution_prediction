db = db.getSiblingDB("scrap");
// create a user

db.runCommand(
  {
    createUser: "boyia",
    pwd:'002780', 
     roles: [
      {
        "role" : "dbAdmin",
        //create a db
        "db" : "scrap"
      }
    
      ], 
    });
//create a collection 
db.createCollection('pollution')

