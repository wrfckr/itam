const express = require('express')
const departmentRouter = express.Router()
const departmentController = require('../controllers/departmentController')

departmentRouter.get('/', departmentController.get)

departmentRouter.get('/&:departmentid', departmentController.getById)

departmentRouter.get('/add', departmentController.addGet)

departmentRouter.post('/add', departmentController.addPost)

departmentRouter.get('/edit/:departmentid', departmentController.editGet)

departmentRouter.post('/edit/:departmentid', departmentController.editPost)

departmentRouter.get('/delete/:departmentid', departmentController.delete)


module.exports = departmentRouter
