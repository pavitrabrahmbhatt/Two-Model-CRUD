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



router.delete('/:id', (req, res) => {
  Store.findOneAndDelete(req.params.id, (err, response) => {
    if(err){
      res.send(err);
    } else {
      console.log(response)
      res.redirect('/stores');
    };
  });
});


router.get('/:id/edit', (req, res) => {
  Store.findById(req.params.id, (err, foundStore) => {
    if(err){
      res.send(err);
    } else {
      console.log(foundStore)
      res.render('stores/edit.ejs', {
        store: foundStore
      });
    };
  });
});

router.put('/:id', (req, res) => {

  Store.findByIdAndUpdate(req.params.id, req.body,(err, updateResponse) => {
    if(err){
      res.send(err);
    } else {
      console.log(updateResponse);
      res.redirect('/stores/' + req.params.id);
    }
  })
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