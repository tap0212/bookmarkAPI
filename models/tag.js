const mongoose = require('mongoose')
const unixTimestamp = require('mongoose-unix-timestamp');

const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique:true
    }
})

tagSchema.plugin(unixTimestamp)

module.exports = mongoose.model("Tag", tagSchema)