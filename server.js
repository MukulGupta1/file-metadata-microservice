var express = require('express');
var multer  = require('multer');
var bodyParser = require('body-parser')
var path = require('path')

var upload = multer({dest:'./uploads/'})

var port = process.env.PORT || 8080;

var app = express();
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/form", upload.single('file'),function(req, res) {
  var obj = {};
  obj.size = req.file.size
  res.end(JSON.stringify(obj));
});

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
