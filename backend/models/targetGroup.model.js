const mongoose = require('mongoose'); // import mongoose
const Schema = mongoose.Schema; // import Schema

const targetGroupSchema = new Schema({ 
  groupname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const TargetGroup = mongoose.model('TargetGroup', targetGroupSchema);

module.exports = TargetGroup;