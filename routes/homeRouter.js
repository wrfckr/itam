const express = require('express')
const homeRouter = express.Router()
const homeController = require('../controllers/homeController.js')

homeRouter.get('/', homeController.home)

module.exports = homeRouter
