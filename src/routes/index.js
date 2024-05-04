const express = require('express')
const router = express.Router()
const prodRouter = require('./products')

router.get('/',(req,res)=>{
    res.send("welcome")
})

router.use('/products',prodRouter)

module.exports = router;