const express = require('express');
const router = express.Router();

router.get('/', (erq, res ) => {
    res.status(200).send("Homepage");
});

module.exports = router;