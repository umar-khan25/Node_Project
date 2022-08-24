const fs = require('fs');

const responseHandler = () => {
  const url = req.url;
  const method = req.method;
  if (url === '/' && method === 'POST') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.text', 'Dummy');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>my first node app</title>');
  res.write('<body><h1>Hello from my node server</h1></body>');
  res.write('</html>');
  res.end();
};
exports.handler = responseHandler;
