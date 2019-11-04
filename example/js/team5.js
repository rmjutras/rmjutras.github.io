onPageLoad = function()
{
	console.log('henlooo');
	var json = require('./static/example.json');
	obj = JSON.parse(json);
	document.getElementById("demo").innerHTML =obj.name;
	console.log(obj);
};
