const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique:true
    }
}, {timestamps: true})

module.exports = mongoose.model("Tag", tagSchema)