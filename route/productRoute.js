const express = require('express');

const {getAllProducts, getSingleProduct, createSingleProduct, updateSingleProduct, deleteSingleProduct} = require('../controllers/productController');
const router = express.Router();


// gets all products
// router.get('/products', getAllProducts);

// // get a single product
// router.get('/products/:id', getSingleProduct)

// // create a product
// router.post('/products/', createSingleProduct)

// // Update a product

// router.put('/products/:id', updateSingleProduct)

// // Delete a product

// router.delete('/products/:id', deleteSingleProduct)

router.route('/products').get(getAllProducts).post(createSingleProduct)

router.route('/products/:id').get(getSingleProduct).put(updateSingleProduct).delete(deleteSingleProduct)

module.exports = router