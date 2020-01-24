# todo-app-node-sequelize-mysql
Create todo app using node/sequelize/mysql

# How to start application
docker-compose up

# schema
## todos
| column        | type(length)   |              |               | 
| ------------- |:--------------:|:------------:| -------------:| 
| id            | INT(11)        | PRIMARY KEY  | NOT NULL      | 
| is_done       | INT(1)         | NOT NULL     | DEFAULT '0'   | 
| todo          | TEXT           | NOT NULL     |               | 
| created_at    | DATE           | NOT NULL     |               | 
| updated_at    | DATE           |              |               |


<!-- TODO: 後でswaggerとか使ってみよう -->
## Create
curl -X POST http://localhost:3000/todos -H "Content-type: application/json" -d '{"title": "aho", "description": "ahotteiu"}'

## Update
curl -X PUT http://localhost:3000/todos/[:id] -H "Accept: application/json" -H "Content-type: application/json" -d '{"title": "baka", "description": "bakatteiu"}'

## Delete
curl -X DELETE http://localhost:3000/todos/[:id]