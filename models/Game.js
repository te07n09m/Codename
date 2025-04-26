const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
    words: { type: [String], required: true },
    colors: { type: [String], required: true }
})

module.exports = mongoose.model('Game', GameSchema)
