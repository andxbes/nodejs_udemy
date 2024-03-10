const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();


router.get('/product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'product.html'));
});

router.post('/product', (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/');
});


module.exports = router;