const mongoose = require('mongoose');
const { members } = require('../config/db'); // Import connection

const membersSchema = new mongoose.Schema({
    name: { type: String, required: true }, // member name
    regNo: { type: String, required: true }, // roll no
    email: { type: String, required: true }, // email
    profile_image: {type: String, required: true}, // profile image url
    desc: { type: String } // additional details, not required
});

const Members = members.model("members", membersSchema, "members");
module.exports = Members;