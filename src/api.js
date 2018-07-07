const express = require('express');
const router = express.Router();
const Post = require('./modules/post');

router.get('/post', function(req,res, next){
	res.send({type: 'Summergale'});
})
;
router.post('/post', function(req,res, next){
  Post.create({name: req.body.name,
    _id:req.body.id}).then(function(post){
	res.send(post);
}).catch(next);
});

router.put('/post/:id', function(req, res, next){
  Post.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Post.findOne({_id: req.params.id}).then(function(post){
            res.send(post);
        });
    }).catch(next);
});

router.delete('/post/:id', function(req,res, next){
	Post.findByIdAndRemove({_id: req.params.id}).then(function(post){
		res.send(post);
	});

});

module.exports = router;
