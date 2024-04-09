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

exports.knex = knex
