const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        res.render('home', { title: 'Главная страница' })
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router
