const mongoose = require('mongoose')

const bookmarkSchema = new mongoose.Schema({
    link: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    publisher: {
        type: String,
        trim: true,
        required: true
    },
    tags : [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Tag"
    }]
}, {timestamps: true})


module.exports = mongoose.model("Bookmark", bookmarkSchema)
