const mongoose = require('mongoose'); // import mongoose
const Schema = mongoose.Schema; // import Schema

const targetGroupSchema = new Schema({
  groupname: { type: String, required: true, unique: true, trim: true, minlength: 3},
  problems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: false }],
  imageUrl: { type: String, required: false },


}, {
  timestamps: true,
});

const TargetGroup = mongoose.model('TargetGroup', targetGroupSchema);

module.exports = TargetGroup;