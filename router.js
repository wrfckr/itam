const express = require('express');
const router = express.Router();
const db_connection = require('./db_connection')

router.get('/', async (req, res) => {
	try {
		res.render('index', { title: 'Главная страница' })
	} catch (error) {
		res.status(500).send(error)
	}
})

router.get('/assets', async (req, res) => {
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


module.exports = router;