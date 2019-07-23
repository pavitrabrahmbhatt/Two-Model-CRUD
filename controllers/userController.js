const express = require('express');
const router = express.Router();

const User = require("../models/user.js")


router.get('/', (req, res, next)=>{
  User.find({},(err,users)=>{
  	if(err) next(err);
  	else {
  		res.render('users/index.ejs', {
  			users: users
  		})
  	}
  })
});



router.get("/new",(req,res) => {
	res.render("users/new.ejs")
})



router.delete('/:id', (req, res) => {
  User.findOneAndDelete(req.params.id, (err, response) => {
    if(err){
      res.send(err);
    } else {
      console.log(response)
      res.redirect('/users');
    };
  });
});


router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    if(err){
      res.send(err);
    } else {
      console.log(foundUser)
      res.render('users/edit.ejs', {
        store: foundUser
      });
    };
  });
});


router.put('/:id', (req, res) => {

  User.findByIdAndUpdate(req.params.id, req.body,(err, updateUser) => {
    if(err){
      res.send(err);
    } else {
      console.log(updateUser);
      res.redirect('/users/' + req.params.id);
    }
  })
})


router.get("/:id",(req,res,next) => {
	User.findById(req.params.id, (err,user)=>{
		if(err) next(err);
		else{
			res.render("users/show.ejs",{
				user:user
			})
		}
	})
})


router.post('/',(req,res,next) => {
	User.create(req.body,(err,users) =>{
		if(err) next(err);
		else {
			res.redirect("/users")
		}
	})
})

module.exports = router;