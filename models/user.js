const db = require('../db.config').knex

module.exports = {
	getAll: function (callback) {
		db('users').select('*').then(callback)
	},

	getWithDepartment: function (callback){
		db.select({id: 'users.id', name: 'users.name',	position: 'users.position' ,departmentname:  'department.name'})
			.from('users')
			.leftJoin('department', 'department.id', 'users.department_id')
			.then(callback)
	},

	getById: function (id, callback) {
		db('users').select('*').where('id', id).then(callback)
	},

	create: function (data, callback) {
		db('users')
			.insert({
				name: data.name,
				department_id: data.department_id,
				position: data.position,
			})
			.then(callback)
	},

	update: function (data, id, callback) {
		db('users')
			.where('id', id)
			.update({
				name: data.name,
				department_id: data.department_id,
				position: data.position,
			})
			.then(callback)
	},

	delete: function (id, callback) {
		db('users').where('id', id).delete().then(callback)
	}
}
