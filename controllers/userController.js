const User = require('../models/user.js')

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
	res.render('user/add', {
		title: 'Новый пользователь',
	})
}

exports.addPost = (req, res) => {
	User.create(req.body, (results) => {res.redirect('/user')})
}

exports.editGet = (req, res) => {	
	User.getById(req.params.userid, (result) => {
		res.render('user/edit', {
			title: 'Редактирование пользователя',
			aUser: result,
		})
	})
}

exports.editPost = (req, res) => {
	User.update(req.body, req.params.userid, (result) => {res.redirect('/user')})
}

exports.delete = (req, res) => {
	User.delete(req.params.userid, (result) => {res.redirect('/user')})
}


