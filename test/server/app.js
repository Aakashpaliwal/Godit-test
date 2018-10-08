var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
var bodyParser   = require('body-parser');
var session = require('express-session');
var empty = require('is-empty');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'supersecretkey',resave: true, saveUninitialized: true ,cookie: { maxAge:60000, }}));

var indexRouter = require('./routes/index');
app.use('/', indexRouter);
var usersRouter = require('./routes/users');
app.use('/users', usersRouter);

var admin = require('./routes/admin/admin.js');
app.use('/admin', admin);


var myequipment = require('./routes/myequipment/myequipment.js');
app.use('/myequipment', myequipment);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
