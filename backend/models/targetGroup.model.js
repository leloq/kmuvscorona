const mongoose = require('mongoose'); // import mongoose
const Schema = mongoose.Schema; // import Schema
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const targetGroupSchema = new Schema({
  groupname: { type: String, required: true, unique: true, trim: true, minlength: 3},
  description: { type: String, required: false },
  problems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: false }],
  imageUrl: { type: String, required: false },
  slug: { type: String, slug: "groupname", slug_padding_size: 1, unique: true },

}, {
  timestamps: true,
});

const TargetGroup = mongoose.model('TargetGroup', targetGroupSchema);

module.exports = TargetGroup;