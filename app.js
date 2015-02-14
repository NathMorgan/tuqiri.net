
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var portfolio = require('./routes/portfolio');
var http = require('http');
var path = require('path');
var mongo = require('mongodb');
var mongoskin = require('mongoskin');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('domain', '127.0.0.1');
app.use(express.favicon("public/images/global/favicon.ico"));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Make the database accessible to the router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/portfolio', portfolio.index);
app.get('/contact', routes.contact);
app.get('/bug', routes.bug);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), app.get('domain'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
