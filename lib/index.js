'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./routes/api/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//Body parser middleware
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

//Server
app.get('/', function (req, res) {
  res.status(200).json({ message: 'Welcome to Politico' });
});

app.put('/', function (req, res) {
  res.status(200).json({ message: 'You have successfully edited Politico' });
});

app.use('/api/v1/admin', _index2.default);

app.all('*', function (req, res) {
  res.send('Wrong Endpoint');
});

var port = process.env.port || 5000;

app.listen(port, function () {
  console.log('Server running on port ' + port);
});