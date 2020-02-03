const express= require('express');
const bodyParser=require('body-parser');
const routes= require('./routes/api');
const mongoose=require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const app=express();

mongoose.connect('mongodb://localhost/sensor_data');
mongoose.Promise=global.Promise;

app.use(bodyParser.json());

app.use("/api",routes);

app.use(function(err,req,res,next){
	res.status(422).send({error: err.message});
});

app.listen(process.env.PORT||4000,function(){
	console.log('now listening to request');
});
