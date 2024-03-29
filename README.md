# Ecommerce API with Node.js

This repository contains the source code for an Ecommerce API built with Node.js. The API supports various operations such as product and category listing, cart management, order processing, and user authentication using JSON Web Tokens (JWT).

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [API Documentation](#api-documentation)
- [Design Decisions](#design-decisions)

## Features

The API provides the following features:

- Category Listing
- Product Listing
- Product Details
- Cart Management
- Order Placement
- Order History
- Order Details
- User Registration
- User Login
- JWT Authentication

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:

```
https://github.com/rahulkundelwalll/Ecommerce-API-with-Node.js
```

2. Install dependencies:

```
cd Ecommerce-NodeJS-API
npm install
```

3. Configure the environment variables. Create a `.env` file in the root directory and add the following variables:

```
PORT=3000
HOST:"localhost",
USER:"root",
PASSWORD:"*****",
DATABASE:"ecommerce"
JWT_SECRET=your_jwt_secret
```

4. Start the server:

```
npm start
```

The server will start running at `http://localhost:3000`.


## Design Decisions

- **Database**: MYSQL is used as database for CRUD operations on products, cart items, and orders.
- **Authentication**: JWT is implemented for user authentication, allowing users to register, log in, and obtain tokens to authenticate API requests.
- **Error Handling**: Meaningful error messages and status codes are returned by the API when necessary.
- **Rate Limiting**: Rate limiting is optionally available to prevent abuse and maintain server stability.
