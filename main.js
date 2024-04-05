const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))


app.use(expressLayouts)
app.set('layout', './layouts/default')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))

app.use('/', require('./routes/homeRouter'))
app.use('/asset', require('./routes/assetRouter'))



let port = 3000
app.listen(port, () => {
	console.log(`сервер запущен: http://localhost:${port}`)
})
