const mongoose = require('mongoose');

const CONN_STRING = "mongodb://localhost:27017/";
const connections = {
    members: mongoose.createConnection(CONN_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }),
};

console.log('Connected to MongoDB database.');

module.exports = connections;