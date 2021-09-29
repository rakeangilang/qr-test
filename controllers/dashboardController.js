const express = require('express')
const router = express.Router()
const qr = require('qrcode')
const Product = require('../models/Product')
const dateService = require('../services/dateService')
const uniqueCode = require('../services/uniqueCodeService')

router.get('/', async (req, res) => {
    await Product.findAndCountAll()
        .then((result) => {
            res.render('dashboard', {
                data: result.rows,
                dataCount: result.count
            })
        })
        .catch((error) => {
            res.send(error)
        })
})

router.get('/challenge', (req, res) => {
    res.render('challenge')
})

router.get('/:id', (req, res) => {
    console.log(uniqueCode.getText(req.params.id))
    res.setHeader('content-type', 'image/png')
    qr.toFileStream(res, uniqueCode.getText(req.params.id))
})

router.post('/post', async (req, res) => {
    const date = dateService.trim(req.body.purchaseTime)
    const code = await uniqueCode.generate(req.body.product, req.body.branch, date.month, date.year)

    await Product.create({
        product: req.body.product,
        branch: req.body.branch,
        month: date.month,
        year: date.year,
        code: code
    })
        .then(async () => {
            await Product.findAndCountAll()
                .then((result) => {
                    res.redirect('/')
                })
                .catch((error) => {
                    res.send(error)
                })
        })
        .catch((error) => {
            res.send(error)
        })
})

module.exports = router