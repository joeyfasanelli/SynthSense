const express = require('express')
const Track = require('../models/tracks')
const router = express.Router()

//I
router.get('/', (req,res) => {
    Track.find({}, (err, foundTrack) => {
        res.render('tracks/index.ejs', {
            tracks: foundTrack
        })
    })
})

//N
router.get('/new', (req, res) => {
    res.render('tracks/new.ejs')
})


//D
router.delete('/:id', (req, res) => {
    Track.findByIdAndRemove(req.params.id, () => {
        res.redirect('/tracks')
    })
})

//U
router.put('/:id', (req, res) => {
    Track.findByIdAndUpdate(req.params.id, req.body,{new:true}, () => {
        res.redirect('/tracks')
    }) 
})

//C
router.post('/', (req, res) => {
    Track.create(req.body, (err, createdTrack) => {
        res.redirect('/tracks')
    })
})

//E
router.get('/:id/edit', (req, res) =>{
    Track.findById(req.params.id, (err, foundTrack) => {
        res.render('tracks/edit.ejs', {
            track: foundTrack
        })
    })
})


//S
router.get('/:id', (req, res) => {
    Track.findById(req.params.id, (err, foundTrack) => {
        res.render('tracks/show.ejs',  {
            track: foundTrack
        })
    })
})

module.exports = router