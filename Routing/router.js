const express = require('express');
const router = express.Router();

router.get('/hello', function(req, res) {
    res.send('Hello World\n');
});

module.exports = router;