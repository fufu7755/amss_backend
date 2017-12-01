const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//express 日志组件 morgan
const logger = require('morgan')

const port = process.env.PORT || 3000
const app = express()

const dbUrl = 'mongodb://localhost/amss'
mongoose.Promise = global.Promise
mongoose.connect(dbUrl, {useMongoClient: true})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 开发环境下效果配置 生成环境要改
const env = process.env.NODE_ENV || 'development'
if ('development' === env) {
  app.set('showStackError', true)
  app.use(logger(':method :url :status'))
  app.locals.pretty = true
  mongoose.set('debug', true)
}

app.use(cors())

// 引用路由文件
require('./config/routes')(app)

app.locals.moment = require('moment')

app.use(express.static(path.join(__dirname, 'public')))
app.listen(port)
