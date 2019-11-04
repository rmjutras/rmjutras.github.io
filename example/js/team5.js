let team = {};

team.onPageLoad = function(isProdContext)
{
	var json = require('./static/example.json');
	obj = JSON.parse(json);
	document.getElementById("demo").innerHTML =obj.name;
	console.log(obj);
}
