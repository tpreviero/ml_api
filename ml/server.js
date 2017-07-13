var express = require("express");
var path = require("path");
var app = express();

app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));

app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(3000, function(req, res) {
    console.log("Servidor escutando na porta: " + this.address().port);
});