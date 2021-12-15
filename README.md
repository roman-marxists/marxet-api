# marxet-api

Backend for marxet bartering app

Setup mongo

1. Create file `.env` in root directory. You can copy and rename from the `example.env` file
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
username | String | Required ID of the product to post the review for
zipcode | Number | Integer (1-5) indicating the review rating
listings | [Product] | All listings the user created
wishlist | [Product] | All listings the user has wishlisted
watchlist | [Product] | All listings the user has watched

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





### GET /api/products
Retrieves all products.

RESPONSE
> Response: Status 200 OK
```json
"insert json results here"
```

### GET /api/products/:id
Retrieves product with a given id.

Parameter | Type | Description
-------|------|------------
id | integer | Selects the product to return.

RESPONSE
> Response: Status 200 OK
```json
"insert json results here"
```

### POST /api/products
Adds a product to the database of products.

Parameter | Type | Description
-------|------|------------
name | String | Required name of the product to post.
description | String | Required description of the product
categories | [String] | Required at least 1 category for the product
zipcode | Number | Integer indicating the zipcode

RESPONSE
> Response: Status 201 CREATED

### PUT /api/products/:id
Updates a product with the given id.

Parameter | Type | Description
-------|------|------------
id | integer | Required ID of the product to update

RESPONSE
> Response: Status 204 NO CONTENT

### DELETE /api/products/:id
Deletes a user with the given id.

Parameter | Type | Description
-------|------|------------
id | integer | Required ID of the product to delete

RESPONSE
> Response: Status 204 NO CONTENT





### GET /api/transactions
Retrieves all transactions.

RESPONSE
> Response: Status 200 OK
```json
"insert json results here"
```

### GET /api/transactions/:id
Retrieves transaction with a given id.

Parameter | Type | Description
-------|------|------------
id | integer | Selects the transaction to return.

RESPONSE
> Response: Status 200 OK
```json
"insert json results here"
```

### POST /api/transactions
Adds a transaction to the database of transactions.

Parameter | Type | Description
-------|------|------------
buyer | User | Required buyer of the product
seller | User | Required seller of the product
product | Product | Required product being bartered
zipcode | Number | Integer indicating the zipcode of the sale

RESPONSE
> Response: Status 201 CREATED
