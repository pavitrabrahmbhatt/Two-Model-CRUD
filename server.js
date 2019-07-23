const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const userController = require('./controllers/userController')

const app = express();

require('./db/db');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
//HOME PAGE
app.get('/', (req,res) => {
	res.render('index.ejs')
})

app.use("/users", userController)


app.listen(3000, () => {
  console.log('my server is listening for client requests on port 3000')
});
