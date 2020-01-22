'use strict';

// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('HogeHogeHogeeeee');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}); 