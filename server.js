var express = require('express'),
    path = require('path'),
    compress = require('compression'),
    mongoose = require('mongoose'),
    morgan = require('morgan');
    defaultRoute = require('./routes/default'),
    bodyparser = require('simple-bodyparser'),
    jsonparser = require('jsonparser'),
    mongoURL = 'mongodb://localhost/ng-test',
    port = 3000,
    app = express();

mongoose.connect(mongoURL);

app.use(morgan('short'));
app.use(bodyparser());
app.use(jsonparser());
app.use(compress());

app.use(function (req, res, next) {
  res.set('X-Clacks-Overhead', 'GNU Terry Pratchet');
  res.set('X-Powered-By','Mystic Worms');
  next();
});

app.use('/dist',express.static(path.resolve('./dist')));
app.use('/api',defaultRoute);

app.get('/',function(req,res,next){
  res.sendFile(path.resolve('./views/index.html'));
});

var server = app.listen(port,function(){
  console.log('App listening on port: %s',port);
});
