# shopping-list
Shopping list app where multiple users can share lists

## Requirements
- Docker


## Instructions
1. Clone project

#### First terminal window
1. cd into project root 
2. cd db
2. run command: docker-compose up

#### Second terminal window
1. cd into project root
2. cd server
3. npm i
4. npm run start (or npm run restart for automatic restart of server on changes while developing)

#### Third terminal window
1. cd into project root
2. cd client
3. npm i
4. npm run start

## !!! Don't forget to change password for the database in server/docker-compose.yml !!!

