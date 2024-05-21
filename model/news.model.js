const mongoose = require("mongoose");

const { Schema } = mongoose;

const newsSchema = new Schema({
    id: String,
    title:String,
    content:String,
    url:String
});

const NewsModel = mongoose.model("news", newsSchema);

module.exports = NewsModel;