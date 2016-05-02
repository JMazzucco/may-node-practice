var http = require("http");

var server = http.createServer(function (request, response){
	//send the HTTP header
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//send the response body
  response.write("<!DOCTYPE "html">");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
  response.end();
})

server.listen(8081);

// Console will print the message
console.log("Server is listening");
