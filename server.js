
var http = require('http');
var LoremIpsum = require('./lorem-ipsum.js');

var lipsum_served = 0;

var handleRequest = function(request, response) {
	console.log('Received request for URL: ' + request.url);
	response.writeHead(200);

	if(request.url.indexOf('metrics') !== -1) {
		response.write('# HELP strings_provided Number of lorem ipsum strings provided.\n');
		response.write('# TYPE strings_provided counter.\n');
		response.end("strings_provided " + lipsum_served.toString());
	}
	else {
		var generator = new LoremIpsum();
		var lipsum = generator.generate(100);
		lipsum_served++;
		response.end(lipsum);
	}
};

var www = http.createServer(handleRequest);
www.listen(8082);

