const express = require('express');
const app = express();
app.use(express.static('./dist/frontend-admin'));
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/frontend-admin/index.html');
});
app.listen(process.env.PORT || 8080);
