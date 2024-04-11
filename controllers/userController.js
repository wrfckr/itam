const User = require('../models/user.js')
const Department = require('../models/department.js')

exports.get = (req, res) => {
	User.getAll((results) => {res.render('user/users', {
		title: 'Список пользователей',
		tableData: results,
	})
})
}

exports.getById = (req, res) => {
	User.getById(req.params.userid, (results) => {res.send(results)})
}

exports.addGet = (req, res) => {
	Department.getAll((results) => {
		res.render('user/add', {
			title: 'Новый пользователь',
			departments: results
		})
	})
}

exports.addPost = (req, res) => {
	User.create(req.body, (results) => {res.redirect('/user')})
}

exports.editGet = (req, res) => {	
	let departmentList
	Department.getAll((results) => {
		departmentList =  results
	})

	User.getById(req.params.userid, (result) => {
		res.render('user/edit', {
			title: 'Редактирование пользователя',
			aUser: result,
			departments: departmentList
		})
	})
	delete departmentList
}

exports.editPost = (req, res) => {
	User.update(req.body, req.params.userid, (result) => {res.redirect('/user')})
}

exports.delete = (req, res) => {
	User.delete(req.params.userid, (result) => {res.redirect('/user')})
}

exports.getWithDepartment = (req, res) => {
	User.getWithDepartment((results) => {res.render('user/users', {
		title: 'Список пользователей',
		tableData: results,
	})
})
}
