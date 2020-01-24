import express from 'express';
import model from './../../models';

const router = express.Router();

/* GET route page. */
router.get('/', function(req, res, next) {
  return res.send('goto /todos')
});

export default router;
