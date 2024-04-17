exports.getAllProducts = (req, res) => {
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
  }

  exports.getSingleProduct = (req, res) => {
      res.status(200)
      res.json({
        productName: 'iphone 15',
        productPrice: '$1300'
      })
  }

  exports.createSingleProduct = (req, res) => {
    res.status(200)
    res.json({
      message: "product added successfully"
    })
}

exports.updateSingleProduct = (req, res) => {
    res.status(200)
    res.json({
      message: "product updated successfully"
    })
}

exports.deleteSingleProduct =  (req, res) => {
    res.status(200)
    res.json({
      message: "product deleted successfully"
    })
}