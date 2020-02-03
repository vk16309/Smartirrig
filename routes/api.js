const express=require('express');
const router=express.Router();
const Data=require('../models/sensordata')

router.get('/data',function(req,res,next){
	Data.find({}).then(function(data){
		res.send(data);
	});
});


router.get('/data/:id',function(req,res,next){
	Data.findOne({_id:req.params.id}).then(function(data){
		res.send(data);
	});
});


router.post('/data',function(req,res,next){
	Data.create(req.body).then(function(data){
		res.send(data);
	}).catch(next);
});


router.put('/data/:id',function(req,res,next){
	Data.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
		// console.log("updated"+req.body);
		Data.findOne({_id:req.params.id}).then(function(data){
			res.send(data);
		});
	});
});

module.exports=router;