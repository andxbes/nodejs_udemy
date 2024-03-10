const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.send('<h1>Hello</h1><a href="/admin/product">Product</a>');
});


module.exports = router;