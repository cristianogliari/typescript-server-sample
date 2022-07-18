# Typescript / NodeJS Resource Server
- Sample backend implementation using Typescript, NodeJS and Express.

## Requirements

- MongoDB.
- Configure a MongoDB Database and MongoDB user.
- Node 18+.

## MongoDB

### Create a MongoDB Database
To know more information how to create a MongoDB Databaser [click here](https://www.mongodb.com/docs/compass/current/databases).

### Configure a MongoDB Database user
To know more information how to create a MongoDB Database user [click here](https://www.mongodb.com/docs/manual/tutorial/create-users/).

## Env file

Create a .env file and put the content below inside there, it's necessary configure the mongo DB server included on docker-db folder.

- To create a .env file, access the root folder from this repository and execute `touch .env`.
- To execute mongoDB server without mongoDB installation go to docker-db folder and execute `docker compose up`. WARN: to older docker compose versions, execute the command with `-` like `docker-compose up`.

```sh
  # SERVER CONFIG
  PORT=8080
  DEFAULT_PATH=

  # MONGO DB CONFIG
  MONGO_USER=nodeTest
  MONGO_PASSWORD=123456
  MONGO_SERVER=localhost
  MONGO_DATABASE=node-test
  MONGO_PORT=27017
```