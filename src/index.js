'use strict';

import index from './routes';
import todos from './routes/todos';

const express = require('express');
const app = express();

// for body parser
app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use('/', index);
app.use('/todos', todos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}); 