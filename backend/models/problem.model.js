const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const problemSchema = new Schema({
	targetGroup: {type: mongoose.Schema.Types.ObjectId, ref: 'TargetGroup', required: true},
	title: {type: String, required: true},
	description: {type: String, required: true},
	severity: {type: Number, required: true},


}, { timestamps: true,

}
	);

const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;

