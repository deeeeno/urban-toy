import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
  res.send('hi1');
});

router.get('/about', function(req, res) {
  res.send('hi2');
});

export default router;