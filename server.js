var http = require("http");

var server = http.createServer(function (request, response){
	//send the HTTP header
 response.writeHead(200, {"Content-Type": "text/html"});

	//send the response body
  response.write('<head>'+
		'<meta http-equiv="Content-Type" '+
		'content="text/html; charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<h1>Hello World!</h1>'+
		'</body>'+
		'</html>'
		);

  console.log(request);
  response.end();
})

server.listen(8081);

// Console will print the message
console.log("Server is listening");
