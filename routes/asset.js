const express = require('express')
const router = express.Router()
const db_connection = require('../db_connection')

router.get('/', (req, res) => {
	db_connection.knex
		.select('assets.id', ' assets.hostname', ' assets.ip', ' users.name')
		.from('assets')
		.leftJoin('users', 'users.id', 'assets.user_id')
		.then((resoults) => {
			res.render('assets', {
				title: 'Список',
				layout: './layouts/for-assets',
				tableData: resoults,
			})
		})
})

router.get('/add', (req, res) => {
	res.render('addasset', {
		title: 'Добавить ассет',
	})
})

router.post('/add', (req, res) => {
	db_connection
		.knex('assets')
		.insert({
			hostname: req.body.hostname,
			ip: req.body.ip,
		})
		.then((result) => {
			res.redirect('/asset')
		})
})

router.get('/edit/:assetid', (req, res) => {
	db_connection.knex
		.select()
		.from('assets')
		.where('id', req.params.assetid)
		.then((result) => {
			res.render('editassetform', {
				title: 'Редактирование ассета',
				aAsset: result,
			})
		})
})

router.post('/edit/:assetid', (req, res) => {
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
})

router.get('/delete/:assetid', (req, res) => {
	db_connection
		.knex('assets')
		.where('id', req.params.assetid)
		.delete()
		.then((result) => {
			res.redirect('/asset')
		})
})


module.exports = router
