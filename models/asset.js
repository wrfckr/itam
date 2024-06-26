const db = require('../db.config').knex

module.exports = {
	getAll: function (callback) {
		db.select('assets.id', ' assets.hostname', ' assets.ip', ' users.name')
			.from('assets')
			.leftJoin('users', 'users.id', 'assets.user_id')
			.then(callback)
	},

	create: function (data, callback) {
		db('assets')
			.insert({
				hostname: data.hostname,
				ip: data.ip,
				user_id: data.user_id
			})
			.then(callback)
	},

	getById: function (id, callback) {
		db('assets').select('*').where('id', id).then(callback)
	},

	update: function (data, id, callback) {
		db('assets')
			.where('id', id)
			.update({
				hostname: data.hostname,
				ip: data.ip,
				user_id: data.user_id
			})
			.then(callback)
	},

	delete: function (id, callback) {
		db('assets').where('id', id).delete().then(callback)
	}
}
