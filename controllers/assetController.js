const db = require('../db.config').knex

const Asset = require('../models/asset.js')

exports.getAssets = (req, res) => {
	Asset.getAll((results) => {
		res.render('asset/assets', {
			title: 'Список',
			layout: './layouts/for-assets',
			tableData: results,
		})
	})
}

exports.addAssetGet = (req, res) => {
	res.render('asset/addasset', {
		title: 'Добавить ассет',
	})
}

exports.addAssetPost = (req, res) => {
	Asset.create(req.body, (results) => {res.redirect('/asset')})
}

exports.editAssetGet = (req, res) => {
	Asset.getById(req.params.assetid, (result) => {
		res.render('asset/editassetform', {
			title: 'Редактирование ассета',
			aAsset: result,
		})
	})
}

exports.editAssetPost = (req, res) => {
	Asset.update(req.body, req.params.assetid, (result) => {res.redirect('/asset')})
}

exports.deleteAsset = (req, res) => {
	Asset.delete(req.params.assetid, (result) => {res.redirect('/asset')})
}
