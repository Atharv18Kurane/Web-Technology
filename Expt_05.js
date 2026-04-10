const http = require('http');

const server = http.createServer((req, res) => {
  const now = new Date();

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello\n');
  res.write('Current date & time: ' + now.toString());
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
