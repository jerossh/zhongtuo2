var express = require('express');
var logger = require('morgan');                     // 显示请求信息
var mongoose = require('mongoose');
var bodyParser = require('body-parser');            // 用于表单提交
var multipart = require('connect-multiparty');      // 用于表单文件提交
var app = express()

var dburl = 'mongodb://localhost/zhongtuo'

// for session store
var mongoStore = require('connect-mongodb')     // 用于本地 session
var session = require('express-session')
var cookieParser = require('cookie-parser')

// database
mongoose.connect('mongodb://localhost/zhongtuo')
console.log('数据库已经连接');

// 模版引擎
app.set('views', './views/pages');
app.set('view engine', 'jade');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(multipart())

// 用户持久化连接
app.use(cookieParser())
app.use(session({
  secret: 'zhongtuo2',
  resave: false,
  ssaveUninitialized: true,
  store: new mongoStore({
    url: dburl,
    collection: "sessions"
  })
}))

app.locals.moment = require('moment')

require('./routes/router')(app)


// tooltip
if (app.get('env') === 'development') {
  app.set('showStarckerr', true)              // 打印错误信息
  app.use(logger(':method:url:status'))       // 请求的相关信息
  app.locals.pretty = true                    // 不压缩源代码
  mongoose.set('debug', true)                 // 数据库请求信息
}

module.exports = app
