var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var dbconnect = require('./app/database/models')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//TODO: Check & synchronoun to database
dbconnect.sequelize.authenticate()
  .then(() => {
    console.log("Connected in the database.");
    
  }).catch((err) => {
    console.log("Failed connected in the database: ", error);
  });

dbconnect.sequelize.sync()
  .then(() => {
    console.log("Sync db.");

  }).catch((err) => {
    console.log("Failed to sync db: ", err.message) ;
  });
  
//TODO: Configuration body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

//TODO: view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js/')))
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css/')))

app.use('/', indexRouter);
app.use('/users', usersRouter);

//TODO: catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//TODO: error handler
app.use(function(err, req, res, next) {
  
  //* set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //* render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
