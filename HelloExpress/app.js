//모듈선언부분
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');

//서버 설정 부분
var app = express();

// view engine setup
//view페이지 기본 경로
app.set('views', path.join(__dirname, 'views'));
//뷰엔진으로 ejs를 사용하겠다.
app.set('view engine', 'ejs');

//미들웨어 등록부분-개발에 필요한 기본적인 미들웨어는 express-generator가 자동으로 등록해준다.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload', express.static('uploads'));//가상경로지정

//새로운 미들웨어 작성해보기
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);

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
