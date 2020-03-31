const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const solutionSchema = new Schema({
	title: { type: String, required: true},
	description: {type: String, required: true},
	specificForTargetGroups: [{type: String, required: false}],
	upVotes: { type: Number, required: false},
	downVotes: { type: Number, required: false},
	preliminary: { type: Boolean, required: true},

}, { timestamps: true,

}
	);

const Solution = mongoose.model('Solution', solutionSchema);
module.exports = Solution; 

