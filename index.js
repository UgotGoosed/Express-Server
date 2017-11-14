var express = require('express');
//create new application object
var app = express();
var path = require('path');
 
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about.html', function (req, res){
    res.sendFile(__dirname + '/about.html');
});
// res.send('Hello World');
//app.use(express.static(__dirname + '/public'));
app.listen(3000, () => console.log('example app listening on port 3000'));