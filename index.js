
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
});
