var express = require('express');
var app = express();

app.use('/js', express.static(__dirname + '/js'));
app.use('/appdata', express.static(__dirname + '/appdata'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/partials', express.static(__dirname + '/partials'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

app.listen(8000, function () {
    console.log('app listening on 127.0.0.1:8000');
});
