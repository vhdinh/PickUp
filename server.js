var createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  apiRouter = require('./routes/pickUp');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pickUp',  { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful to pickUp DB'))
.catch((err) => console.error(err));


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/pickUp')));
app.use('/', express.static(path.join(__dirname, 'dist/pickUp')));
app.use('/api', apiRouter);

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
  res.send(err.status);
});

module.exports = app;
