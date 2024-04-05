const db_connection = require('../db_connection')

exports.getAssets = (req, res) => {
	db_connection.knex
		.select('assets.id', ' assets.hostname', ' assets.ip', ' users.name')
		.from('assets')
		.leftJoin('users', 'users.id', 'assets.user_id')
		.then((resoults) => {
			res.render('asset/assets', {
				title: 'Список',
				layout: './layouts/for-assets',
				tableData: resoults,
			})
		})
}



exports.addAssetGet = (req, res) => {
    res.render('asset/addasset', {
		title: 'Добавить ассет',
	})
}

exports.addAssetPost = (req, res) => {
	db_connection
		.knex('assets')
		.insert({
			hostname: req.body.hostname,
			ip: req.body.ip,
		})
		.then((result) => {
			res.redirect('/asset')
		})
}

exports.editAssetGet = (req, res) => {
	db_connection.knex
		.select()
		.from('assets')
		.where('id', req.params.assetid)
		.then((result) => {
			res.render('asset/editassetform', {
				title: 'Редактирование ассета',
				aAsset: result,
			})
		})
}

exports.editAssetPost = (req, res) => {
	db_connection
		.knex('assets')
		.where('id', req.params.assetid)
		.update({
			hostname: req.body.hostname,
			ip: req.body.ip,
		})
		.then((result) => {
			res.redirect('/asset')
		})
}

exports.deleteAsset = (req, res) => {
	db_connection
		.knex('assets')
		.where('id', req.params.assetid)
		.delete()
		.then((result) => {
			res.redirect('/asset')
		})
}