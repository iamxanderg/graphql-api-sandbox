# graphql-api-sandbox

A project I created to learn how to build APIs using node, MongoDB and GraphQL

## Contents

- [Importing Mock Data](#importing-mock-data)
- [Getting Started - Server](#getting-started---server)
- [Update Your Environment File](#update-your-environment-file)
- [Starting The Development Server](#starting-the-development-server)
- [Running Tests](#running-tests)
- [Getting Started - Client](#getting-started---client)
- [Starting The Frontend Client](#start-the-frontend-client)

## Importing Mock Data

To get the mock data setup for this project you will need to create a new collection in MongoDb named sandbox and import
the authors.json and books.json files from the mock-data folder.

## Getting Started - Server

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

```bash
# Clone the project to your machine
git clone git@github.com:iamxanderg/graphql-api-sandbox.git

# Navigate to the server project folder
cd graphql-api-sandbox/server

# Run the install
npm i
```

## Update Your Environment File

Update the details in the .env file to match your environment.

## Start The Development Server

```bash
# Start the development server
npm run devstart
```

The server will reload if you make edits.\
You will also see any errors in the console.

## Running Tests

```bash
# Run rest api tests
Open GraphiQL
```

## Getting Started - Client

These instructions will get a copy of the client project up and running on your local machine for development and testing purposes.

```bash
# Navigate to the client project folder
cd graphql-api-sandbox/client

# Run the install
npm i
```

## Start The Frontend Client

```bash
# Start the frontend client
npm start
```

You will see any errors in the console.
