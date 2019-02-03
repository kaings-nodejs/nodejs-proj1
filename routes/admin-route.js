const express = require('express');

const router = express.Router();    //express.Router() is kind of mini express. Works similar to express.

router.get('/add-product', (req, res, next) => {
    console.log('inside add-product..... ');

    /* 
    can change the action="./add-product" or action="/admin/add-product". 
    Both work the same. But, I find "./add-product" (relative path way) 
    is more scallable since it is not hard-coded
     */
    res.send(
        `<form action="./add-product" method="POST">
            <input type="text" name="product-name"></input>
            <button type="submit">Submit</button>
        </form>`);
});

// using similar path only the request method is different.
// this works the same
router.post('/add-product', (req, res, next) => {
    console.log('inside product..... ', req.body);
    res.redirect('/');
});

module.exports = router;