const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const MemberModel = mongoose.model('member_details', memberSchema);

module.exports = MemberModel;


