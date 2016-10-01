/*
  SIMPLE SERVER TO TEST THE APPLICATION
*/

var port = 1337,
    ip = '127.0.0.1'
    express = require('express'),
    app = express();

// serving the examples folder as a static resource
app.use('/examples', express.static('../examples'));

app.listen(port, ip);
console.log(`server up ${ip}:${port}`);
