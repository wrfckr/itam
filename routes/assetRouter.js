const express = require('express')
const router = express.Router()
const assetController = require('../controllers/assetController.js')

router.get('/', assetController.getAssets)

router.get('/add', assetController.addAssetGet)

router.post('/add', assetController.addAssetPost)

router.get('/edit/:assetid', assetController.editAssetGet)

router.post('/edit/:assetid', assetController.editAssetPost)

router.get('/delete/:assetid', assetController.deleteAsset)

module.exports = router
