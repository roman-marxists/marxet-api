# marxet-api

Backend for marxet bartering app

Setup mongo

1. Create file `.env` in root directory
2. Add the following variable to the`.env` file
   `MONGO_URL=mongodb://localhost:27017/<name of your db>`

_Make sure mongo is running locally on your computer_

## Endpoints

### GET /api/users
Retrieves all users.

RESPONSE
> Response: Status 200 OK
```json
"insert json results here"
```

### GET /api/users/:id
Retrieves user with a given id.

Parameter | Type | Description
-------|------|------------
id | integer | Selects the user to return.

RESPONSE
> Response: Status 200 OK
```json
"insert json results here"
```

### POST /api/users
Adds a user to the database of users.

Parameter | Type | Description
-------|------|------------
product_id | integer | Required ID of the product to post the review for
rating | integer | Integer (1-5) indicating the review rating
summary | text | Summary text of the review
body | text | Continued or full text of the review
recommend | bool | Value indicating if the reviewer recommends the product
name | text | Username for question asker
email | text | Email address for question asker
photos | [text] | Array of text urls that link to images to be shown
characteristics | object | Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}

RESPONSE
> Response: Status 201 CREATED

### PUT /api/users/:id
Updates a user with the given id.

Parameter | Type | Description
-------|------|------------
id | integer | Required ID of the user to update

RESPONSE
> Response: Status 204 NO CONTENT

### DELETE /api/users/:id
Deletes a user with the given id.

Parameter | Type | Description
-------|------|------------
id | integer | Required ID of the user to delete

RESPONSE
> Response: Status 204 NO CONTENT
