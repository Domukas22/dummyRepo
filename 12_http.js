//

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("Welcome to our homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("About us page");
    return;
  }
  res.end(`<h1>Oppsie doopsie
  <p>The page you're looking for doesn't exist</p>
  <a href="/">Back home</a>`);
});

server.listen(5000);
