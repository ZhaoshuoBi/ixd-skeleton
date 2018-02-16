
/*
 * GET home page.
 */
var data = require("../data.json");

exports.viewList = function(req, res){
	console.log(data);
    res.render('list', data);
};