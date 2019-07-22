const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const storeController = require('./controllers/storeController')

const app = express();

require('./db/db');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
//HOME PAGE
app.get('/', (req,res) => {
	res.render('index.ejs')
})

app.use("/stores", storeController)


app.listen(3000, () => {
  console.log('my server is listening for client requests on port 3000')
});
