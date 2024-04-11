const Department = require('../models/department')

exports.get = (req, res) => {
	Department.getAll((results) => {res.render('department/department', {
		title: 'Список отделов',
		tableData: results,
	})
})
}

exports.getById = (req, res) => {
	Department.getById(req.params.departmentid, (results) => {res.send(results)})
}

exports.addGet = (req, res) => {
	res.render('department/add', {
		title: 'Новый отдел',
	})
}

exports.addPost = (req, res) => {
	Department.create(req.body, (results) => {res.redirect('/department')})
}

exports.editGet = (req, res) => {	
	Department.getById(req.params.departmentid, (result) => {
		res.render('department/edit', {
			title: 'Редактирование отдела',
			aDepartment: result,
		})
	})
}

exports.editPost = (req, res) => {
	Department.update(req.body, req.params.departmentid, (result) => {res.redirect('/department')})
}

exports.delete = (req, res) => {
	Department.delete(req.params.departmentid, (result) => {res.redirect('/department')})
}


