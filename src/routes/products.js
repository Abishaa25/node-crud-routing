const express = require('express');
const router = express.Router();
const controler = require('../controllers/product')

router.post('/',controler.createProduct)
// router.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'))
router.get('/',controler.displayProduct)
router.get('/:id',controler.displayProduct)
router.put('/:id',controler.modifyProduct)
router.patch('/:id',controler.patchmodifyProduct)
router.delete('/:id',controler.deleteProduct)

module.exports = router