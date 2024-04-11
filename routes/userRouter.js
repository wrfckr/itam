const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController.js')

userRouter.get('/', userController.getWithDepartment)

userRouter.get('/&:userid', userController.getById)

userRouter.get('/add', userController.addGet)

userRouter.post('/add', userController.addPost)

userRouter.get('/edit/:userid', userController.editGet)

userRouter.post('/edit/:userid', userController.editPost)

userRouter.get('/delete/:userid', userController.delete)

module.exports = userRouter
