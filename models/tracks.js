const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trackSchema = new Schema({
    name: String,
    artist: String,
    link: String,
}, {
    timestamps: true
})

const Track = mongoose.model('Track', trackSchema)

module.exports = Track