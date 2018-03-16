var app = require("express")();
var math = require('math');

app.get("/", function(req, res)
{
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(["<ul><li><a href='/suma'>suma</a></li>","<li><a href='/resta'>resta</a></li></ul>"].join('\n'));
});
app.get("/suma", function (req, res)
{
  require('./suma').get(req, res);
});
app.get("/resta", function (req, res)
{
  require('./resta').get(req, res);
});
app.listen(3000);
