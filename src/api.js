const express = require('express');
const router = express.Router();
const Post = require('./modules/post');

router.get('/post/:id', function(req, res, next){
    Post.findById({_id: req.params.id}).then(function(post){
    res.send(post).catch(next);
})
})
;
router.post('/post', function(req,res, next){
  Post.create({ name: req.body.name}).then(function(post){
  res.send(post);
  console.log(post);
}).catch(next);
});

router.put('/post/:id', function(req, res, next){
  console.log("update");
  Post.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Post.findOne({_id: req.params.id}).then(function(post){
            res.send(post);
        });
    }).catch(next);
});

router.delete('/post/:id', function(req,res, next){
  console.log("delete");
	Post.findByIdAndRemove({_id: req.params.id}).then(function(post){
		res.send(post);
	}).catch(next);

});


module.exports = router;
