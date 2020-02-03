const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const SensorData=new Schema({
	water_level:{
		type:Number,
		required:[true,"Sensor data required"]
	},
	safe:{
		type:Boolean,
		default:true
	}},{
		timestamps:true

});

const Data=mongoose.model('data',SensorData);
module.exports=Data;
