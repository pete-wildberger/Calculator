//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//uses
app.use (express.static('public'));
app.use( bodyParser.urlencoded( { extended: true } ) );

//globals


//listen
app.listen(2017, function(){
  console.log('up on 2017');
});

//base URL
app.get( '/', function(req, res){
  console.log('base url hit');

  res.sendFile(path.resolve('views/index.html'));
});

//POST
app.post('/mathEquals', function(req, res){

  console.log('equals', req.body);
  var mathInfo = req.body;
  var result;

if (mathInfo.opera == 'TIMES'){
  console.log('multi');
  result = Number(mathInfo.a) * Number(mathInfo.b);
}
else if (mathInfo.opera == 'DIVIDED BY'){
  console.log('divide');
  result = Number(mathInfo.a) / Number(mathInfo.b);
}
else if (mathInfo.opera == 'PLUS'){
  console.log('plus');
  result = Number(mathInfo.a) + Number(mathInfo.b);
}
else if (mathInfo.opera == 'MINUS'){
  console.log('minus');
  result = Number(mathInfo.a) - Number(mathInfo.b);
}
else if(mathInfo.opera == 'SQRT'){
  if(mathInfo.a !== ''){
    result = 'SYNTAX ERROR';
  } else {
  result = Math.sqrt(Number(mathInfo.b));
  }
}
else if (mathInfo.opera == 'POW'){
  result = Math.pow(Number(mathInfo.a), Number(mathInfo.b));
}


    var responseObject = {
      equals: result
    };
      res.send(responseObject);
  });
