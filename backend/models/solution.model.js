const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const solutionSchema = new Schema({
	title: { type: String, required: true},
	description: {type: String, required: true},
	specificForTargetGroups: [{type: mongoose.Schema.Types.ObjectId, ref: 'TargetGroup', required: false}],
	upVotes: { type: Number, required: false },
	downVotes: { type: Number, required: false },
	preliminary: { type: Boolean, required: false },

}, { timestamps: true,

}
	);

const Solution = mongoose.model('Solution', solutionSchema);
module.exports = Solution; 

