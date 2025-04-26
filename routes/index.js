const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/entrance')
})

router.get('/entrance', (req, res) => {
    res.render('entrance')
})

module.exports = router
