const knex = require('knex')({
	client: 'mysql2',
	connection: {
		host: '192.168.0.30',
		user: 'root',
		database: 'itam',
		password: '',
	},
	pool: { min: 0, max: 10 },
})

exports.knex = knex
