const express = require('express');
const router = express.Router();


// gets all products
router.get('/products', (req, res) => {
  res.status(200)
  res.json([
    {
      productName: 'iphone 15',
      productPrice: '$1300'
    },
    {
        productName: 'iphone 14',
        productPrice: '$1200'
    }
  ])
});

// get a single product
router.get('/products/:id', (req, res) => {
    res.status(200)
    res.json({
      productName: 'iphone 15',
      productPrice: '$1300'
    })
})

// create a product
router.post('/products/', (req, res) => {
    res.status(200)
    res.json({
      message: "product added successfully"
    })
})

// Update a product

router.put('/products/:id', (req, res) => {
    res.status(200)
    res.json({
      message: "product updated successfully"
    })
})

// Delete a product

router.delete('/products/:id', (req, res) => {
    res.status(200)
    res.json({
      message: "product deleted successfully"
    })
})


module.exports = router