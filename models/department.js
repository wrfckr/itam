const db = require('../db.config').knex

module.exports = {
	getAll: function (callback) {
		db('department').select('*').then(callback)
	},

	getById: function (id, callback) {
		db('department').select('*').where('id', id).then(callback)
	},

	create: function (data, callback) {
		db('department')
			.insert({
				name: data.name,
			})
			.then(callback)
	},

	update: function (data, id, callback) {
		db('department')
			.where('id', id)
			.update({
				name: data.name,
			})
			.then(callback)
	},

	delete: function (id, callback) {
		db('department').where('id', id).delete().then(callback)
	}
}
