# jelp Server

## Running locally
1. Run `docker-compose build` to build required services.
2. Run `docker-compose up` to create and start containers. (Note: If containers fail to start and you receive an error you may have to create and start the server and database containers separately - run `docker-compose up db` to start the container for the database and in another terminal tab, run `docker-compose up server`, to start the container for the server).

The server will be hosted locally @ http://localhost:3001.

