const express = require('express')
const router = express.Router()
const assetController = require('../controllers/assetController.js')

const db_connection = require('../db_connection')

router.get('/', assetController.getAssets)

router.get('/add', assetController.addAssetGet)

router.post('/add', assetController.addAssetPost)

router.get('/edit/:assetid', assetController.editAssetGet)

router.post('/edit/:assetid', assetController.editAssetPost)

router.get('/delete/:assetid', assetController.deleteAsset)

module.exports = router
