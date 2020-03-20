const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const solutionSchema = new Schema({
	problem: { type: String, required: true},
	title: { type: String, required: true},
	description: {type: String, required: true},


}, { timestamps: true,

}
	);

const Solution = mongoose.model('Solution', solutionSchema);
module.exports = Solution; 

