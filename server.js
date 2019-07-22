const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.listen(3000, () => {
  console.log('my server is listening for client requests on port 3000')
});