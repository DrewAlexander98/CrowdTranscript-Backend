const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('Login');
});

router.post('/', (req, res) => {
  addUser(req, res);
})

module.exports = router;