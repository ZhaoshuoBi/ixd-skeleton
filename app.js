
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var list = require('./routes/List');
var marked = require('./routes/marked');
var still = require('./routes/Still');
var map = require('./routes/map');
var setting = require('./routes/setting');
var setting2 = require('./routes/setting2');
var login = require('./routes/login');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
// app.get('/users', user.list);
// app.get('/list', list.viewList);
// app.get('/still', still.viewstill);
// app.get('/marked', marked.viewmarked);
// app.get('/map', map.viewmap);
// app.get('/setting', setting.viewsetting);
// app.get('/setting2', setting2.viewsetting2);
// app.get('/login', login.viewlogin);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
