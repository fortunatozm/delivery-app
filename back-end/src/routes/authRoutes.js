const express = require('express');

const router = express.Router();

router.use('/register', (req, res) => res.status(200).send('OK'));

module.exports = router;
