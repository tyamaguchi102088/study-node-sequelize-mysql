const express = require('express');
const router = express.Router();
const model = require('../../models/index.js');

/* GET route page. */
router.get('/', function(req, res, next) {
  return res.send('goto /todos')
});

module.exports = router;
