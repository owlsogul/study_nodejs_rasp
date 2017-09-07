
// setting of express
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'))
app.set('port', process.env.PORT || 81);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function(req, res){
  res.send('Root');
  res.sendFile('/public/index.html');
});


console.log("router for practice is being loaded");
// var practice_router = require('./practice_router/practice_router');
// 위와 아래가 다를 게 없다는 것을 알 수 있음.
var practice_router = require('./practice_router/practice_router.js');
app.use('/birds', practice_router);
console.log("router for practice is loaded");

//
var webcoder_router = require('./webcoder/router');
app.use('/webcoder', webcoder_router);
