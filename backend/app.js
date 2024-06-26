var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var upcloud = require('express-fileupload'); // variable para utilizar "fileupload", 
//en este caso subirá los archivos a Cloudinary
var cors = require('cors');

require('dotenv').config(); //Tarea M5U3
var session = require('express-session');

var app = express(); //lo puse antes de las variables de ruteo

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login'); // controlador que llama a login.js
var novedades = require('./routes/admin/novedades');
var apiRouter = require('./routes/api');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secretoluna1234',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}))

secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

app.use(upcloud({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter); //activa el controlador
app.use('/admin/novedades', secured, novedades);
app.use('/api', cors(), apiRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
