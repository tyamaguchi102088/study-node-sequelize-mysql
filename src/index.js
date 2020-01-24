'use strict';

// server.js
const express = require('express');
const app = express();
const index = require('./routes/index.js');
const todos = require('./routes/todos.js');

// for body parser
app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use('/', index);
app.use('/todos', todos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}); 