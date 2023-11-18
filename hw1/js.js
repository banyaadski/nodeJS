let counter = 0;
let about = 0;
let notfound = 0;

const http = require("http");
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      counter += 1;
      res.write("<h1>Самая главная страница</h1>");
      res.write(`<h2>Количество посезений страницы: ${counter}</h2>`);
      res.write(`<a href="/about">На страницу обо мне </a>`);

      res.end();

      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      about += 1;
      res.write('<h1>Эта страница обо мне</h1>');
      res.write(`<h2>Количество посещений страницы: ${about}</h2>`);
      res.write(`<a href="/">На страницу галвная </a>`);
      res.end();
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      notfound += 1;
      res.write(`<h1>Page is NotFound 404</h1>`);
      res.write(
        `<h1>Количество переходов на несуществующую страницу: ${notfound}</h1>`
      );
      res.end();
      break;
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
