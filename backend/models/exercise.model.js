const mongoose = require('mongoose');
const schema = mongoose.Schema;

const exerciseSchema = new schema({
	username: {type: String, required: true},
	description: {type: String, required: true},
	duration: {type: Number, required: true},
	date: {type: Date, required: true},



}, {timestamps: true,

}
	);

const Exercise = mongoose.model('Excercise', exerciseSchema);
module.exports = Exercise; 

