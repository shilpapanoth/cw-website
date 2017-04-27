var express = require('express');
app = express();
app.use(express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/bower_components'));
app.listen(3000, function () {
  console.log('Server started at :::: 3000');
});
