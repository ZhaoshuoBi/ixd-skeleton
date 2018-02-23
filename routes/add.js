var data = require("../data.json");

exports.addLocation = function(req, res) {
  var newLocation = {
		time: req.query.time,
		location: req.query.location,
		Note : 'None'
	};
  console.log(newLocation);
  data.location.push(newLocation);
  res.render('index', data);
}