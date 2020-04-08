const http = require('http');
const url = require('url');

const API = process.env.API || 'localhost';
const PORT = process.env.PORT || 3000;

//create a server object:
http.createServer(function (req, res) {
  const urlPath = url.parse(req.url, true).pathname;
  console.log("URL Path:", urlPath);
  var n;
  n = parseInt(urlPath.split('/')[1]);
  // console.log(n)
  if (isNaN(n)) {
    n = 1;
  }
  // console.log(urlPath.split('/'), parseInt(urlPath.split('/')[1]));
  if (n == 1 || n == 2) {
    res.write('1');
    res.end();
  }
  else {
    var fib_last, fib_second_last;
    var options = {
      host: API,
      port: PORT,
      path: `/${n-1}`,
      method: 'GET'
    };
    http.request(options, function(resp) {
      // res.setEncoding('utf8');
      resp.on('data', function (chunk) {
        // console.log('BODY: ' + chunk);
        fib_last = parseInt(chunk);
        var options = {
          host: API,
          port: PORT,
          path: `/${n-2}`,
          method: 'GET'
        };
        http.request(options, function(resp) {
          // res.setEncoding('utf8');
          resp.on('data', function (chunk) {
            // console.log('BODY: ' + chunk);
            fib_second_last = parseInt(chunk);
            res.write(String(fib_last + fib_second_last)); //write a response to the client
            res.end(); //end the response
          });
        }).end();
      });
    }).end();
  }
}).listen(PORT);

console.log('Listening on port: ', PORT);

