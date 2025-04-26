const express = require('express')
const getNewGame = require('../utils/getNewGame')
const Game = require('../models/Game')

const router = express.Router()

router.get('/create', async(req, res) => {
    const newGame = await Game.create({
        words: getNewGame().shuffledWords,
        colors: getNewGame().shuffledColors
    })
    res.redirect(`/game/spy/${newGame._id}`)
})

router.get('/spy/:id', async(req, res) => {
    const game = await Game.findOne({ _id: req.params.id })
    res.render('game/spy', { game: game })
})

router.get('/master/:id', async(req, res) => {
    const game = await Game.findOne({ _id: req.params.id })
    res.render('game/master', { game: game })
})

module.exports = router
