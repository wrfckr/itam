const Asset = require('../models/asset.js')
const User = require('../models/user.js')


exports.getAssets = (req, res) => {
	Asset.getAll((results) => {
		res.render('asset/assets', {
			title: 'Список ассетов',
			// layout: './layouts/for-assets',
			tableData: results,
		})
	})
}

exports.addAssetGet = (req, res) => {
	User.getAll((results) => {
		res.render('asset/addasset', {
			title: 'Добавить ассет',
			users: results,
		})
	})
}

exports.addAssetPost = (req, res) => {
	Asset.create(req.body, (results) => {res.redirect('/asset')})
}

exports.editAssetGet = (req, res) => {
	
	let userList 
	User.getAll((results) => {
		userList =  results
	})
	
	Asset.getById(req.params.assetid, (result) => {
		res.render('asset/editassetform', {
			title: 'Редактирование ассета',
			aAsset: result,
			users: userList
		})
	})
	delete userList
}

exports.editAssetPost = (req, res) => {
	Asset.update(req.body, req.params.assetid, (result) => {res.redirect('/asset')})
}

exports.deleteAsset = (req, res) => {
	Asset.delete(req.params.assetid, (result) => {res.redirect('/asset')})
}
