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