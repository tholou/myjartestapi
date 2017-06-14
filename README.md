# myjartestapi
Back End Developer Job Interview at MYJAR written with Node JS
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
Things you need to install the software.

* You need to have an environment set up (i.e Node Js and MongoDB is installed).
* Kindly run `npm -v` and `mongo --version` as these will show you the version of NPM and MongoDB installed on your machine.
* If you don’t have it installed, kindly go through this [link](https://nodejs.org/en/download/package-manager/) on how to install it in order for you to create a server in Node and [Mongodb](https://docs.mongodb.com/manual/installation/).

### Installing
Provided, all steps above are done, run the following command in the terminal
```
* npm install
* npm run start
``` 

You should see the following on your terminal, after `npm run` start:
```
MYJAR Test RESTful API server started on:3000
```

Finally, open a new terminal and run mongod to start Mongo DB.

Set Up Completed Succefully, now you can test the API endpoints in Postman, like this `http://localhost:3000/api/users`.

### API Endpoints.

#### Retrieve client [GET /api/users/:userId]


+ Request (application/json)
    + Headers

            Content-Type: application/json
    + Parameter

            {
                "userId": "5941404d7273803ab882b8f8",
                "required": true
            }
 + Response (application/json)
    + Headers

            Content-Type: application/json
    + Body

            {
                "_id": "5941404d7273803ab882b8f8",
                "email": "eyinade@ut.ee",
                "phone": "5673",
                "__v": 0,
                "Created_date": "2017-06-14T13:55:25.071Z",
                 "others": [
                      {
                          "firstName": "Tolu",
                          "lastName": "Eyinade",
                          "middleName": "Adelani",
                          "DOB": "12-09-1999",
                          "Country": "Nigeria",
                          "City": "Lagos",
                          "Sex": "Male",
                          "others": "Good Looking"
                      }
                  ]
            }
          
#### List clients [GET /api/users]


+ Request (application/json)
    + Headers

            Content-Type: application/json
    
 + Response (application/json)
    + Headers

            Content-Type: application/json
    + Body

            {
                "_id": "5941404d7273803ab882b8f8",
                "email": "eyinade@ut.ee",
                "phone": "5673",
                "__v": 0,
                "Created_date": "2017-06-14T13:55:25.071Z",
                 "others": [
                      {
                          "firstName": "Tolu",
                          "lastName": "Eyinade",
                          "middleName": "Adelani",
                          "DOB": "12-09-1999",
                          "Country": "Nigeria",
                          "City": "Lagos",
                          "Sex": "Male",
                          "others": "Good Looking"
                      }
                  ]
            }
            
#### Store client data [POST /api/users]


+ Request (application/json)
    + Headers

            Content-Type: application/json
    + Body

            {
                "email": "eyinad11e@ut.ee",
                "phone": "07712345673",
                "firstName":"Tolu",
                "lastName":"Eyinade",
                "middleName":"Adelani",
                "DOB":"12-09-1999",
                "Country":"Nigeria",
                "City":"Lagos",
                "Sex":"Male",
                "others":"Good Looking"
            }
 + Response (application/json)
    + Headers

            Content-Type: application/json
    + Body

            {
                "status_code": "200",
                "message": "User Created Successfully"                
            }
