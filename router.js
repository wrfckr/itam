const express = require('express')
const router = express.Router()
const db_connection = require('./db_connection')

router.get('/', async (req, res) => {
	try {
		res.render('index', { title: 'Главная страница' })
	} catch (error) {
		res.status(500).send(error)
	}
})

router.get('/assets', (req, res) => {
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

router.get('/addasset', (req, res) => {
	res.render('addasset', {
		title: 'Добавить ассет',
	})
})

router.post('/addasset', (req, res) => {
	db_connection
		.knex('assets')
		.insert({
			hostname: req.body.hostname,
			ip: req.body.ip,
		})
		.then((result) => {
			res.redirect('/assets')
		})
})

router.get('/editasset/:assetid', (req, res) => {
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

router.post('/editasset/:assetid', (req, res) => {
	db_connection
		.knex('assets')
		.where('id', req.params.assetid)
		.update({
			hostname: req.body.hostname,
			ip: req.body.ip,
		})
		.then((result) => {
			res.redirect('/assets')
		})
})

router.get('/deleteasset/:assetid', (req, res) => {
	db_connection
		.knex('assets')
		.where('id', req.params.assetid)
		.delete()
		.then((result) => {
			res.redirect('/assets')
		})
})

module.exports = router
