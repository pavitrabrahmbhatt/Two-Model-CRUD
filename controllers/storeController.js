const express = require('express');
const router = express.Router();

const Store = require("../models/store.js")


router.get('/', (req, res, next)=>{
  Store.find({},(err,stores)=>{
  	if(err) next(err);
  	else {
  		res.render('stores/index.ejs', {
  			stores: stores
  		})
  	}
  })
});



router.get("/new",(req,res) => {
	res.render("stores/new.ejs")
})

router.get("/:id",(req,res,next) => {
	Store.findById(req.params.id, (err,store)=>{
		if(err) next(err);
		else{
			res.render("stores/show.ejs",{
				store:store
			})
		}
	})
})

router.post('/',(req,res,next) => {
	Store.create(req.body,(err,stores) =>{
		if(err) next(err);
		else {
			res.redirect("/stores")
		}
	})
})

module.exports = router;