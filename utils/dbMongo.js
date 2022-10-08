require('dotenv').config();

const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@nasadb.t9xzgye.mongodb.net/`+'nasadb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, ssl: true});

const db = mongoose.connection;

db.on("error", error => console.log(error));
db.once("open", () => console.log("MongoDB connected!"));

module.exports = mongoose;