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

- Make sure that you have installed make on your SO and execute the follow command `make mongo-up`.

OR

- To create a .env file, access the root folder from this repository and execute `touch .env`.
- To execute mongoDB server without mongoDB installation go to docker-db folder and execute `docker compose up`. WARN: to older docker compose versions, execute the command with `-` like `docker-compose up`.

!!!WARN: [Click here and check the Makefile](./Makefile) to see available commands

```sh
  # SERVER CONFIG
  PORT=
  DEFAULT_PATH=

  # MONGO DB CONFIG
  MONGO_USER=
  MONGO_PASSWORD=
  MONGO_SERVER=
  MONGO_DATABASE=
  MONGO_PORT=

  # SECURITY
  JWT_SECRET=
```