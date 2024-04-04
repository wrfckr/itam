const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const knex = require('knex')({
	client: 'mysql2',
	connection: {
		host: '10.10.89.151',
		user: 'root',
		database: 'itam',
		password: '',
	},
	pool: { min: 0, max: 10 },
})

const app = express()

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.use(expressLayouts)
app.set('layout', './layouts/default')
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
	try {
		res.render('index', { title: 'Главная страница' })
	} catch (error) {
		res.status(500).send(error)
	}
})

app.get('/assets', async (req, res) => {
	knex
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


let port = 3000
app.listen(port, () => {
	console.log(`сервер запущен: http://localhost:${port}`)
})
