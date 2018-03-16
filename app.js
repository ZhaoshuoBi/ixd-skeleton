
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
// var list = require('./routes/list');
// var marked = require('./routes/marked');
// var still = require('./routes/still');
// var map = require('./routes/map');
// var setting = require('./routes/setting');
// var setting2 = require('./routes/setting2');
// var login = require('./routes/login');
var add = require('./routes/add');
// var alt = require('./routes/alt');
// // alt page
var alt_list = require('./routes/alt_list');
var alt_marked = require('./routes/alt_marked');
var alt_map = require('./routes/alt_map');
var alt_setting = require('./routes/alt_setting');
// var alt_setting2 = require('./routes/alt_setting2');
var alt_login = require('./routes/alt_login');
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
//app.get('/users', user.list);
// app.get('/list', list.viewList);
// app.get('/still', still.viewstill);
// app.get('/marked', marked.viewmarked);
// app.get('/map', map.viewmap);
// app.get('/setting', setting.viewsetting);
// app.get('/setting2', setting2.viewsetting2);
// app.get('/login', login.viewlogin);
 app.get('/add', add.addLocation);
// app.get('/alt', alt.viewAlt);

app.get('/alt_list', alt_list.viewList);
// app.get('/alt_still', alt_still.viewstill);
app.get('/alt_marked', alt_marked.viewmarked);
app.get('/alt_map', alt_map.viewmap);
app.get('/alt_setting', alt_setting.viewsetting);
// app.get('/alt_setting2', alt_setting2.viewsetting2);
app.get('/alt_login', alt_login.viewlogin);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
