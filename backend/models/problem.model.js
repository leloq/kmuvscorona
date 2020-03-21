const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const problemSchema = new Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	severity: {type: Number, required: true},
	solutions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Solution', required: false }],

}, { timestamps: true,

}
	);

const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;

