const Bookmark = require('../models/bookmark')
const Tag = require('../models/tag')
//  getTagById, getAllTags, CreateTag , DeleteTag
//getTagById
exports.getTagById = (req,res,next,id) => {
    Tag.findById(id).exec((err, bm) => {
        if(err) {
            return res.status(400).json({
                error: "Tag Not Found"
            })
        }
        req.tag = bm;
        next();
    })
}
//getAllTags
exports.getAllTags = (req,res) => {
    Tag.find().exec((err, tags) => {
        if(err) {
            return res.status(400).json({
                error: "No Categories Found"
            })
        }
        res.json(tags)
    })
}
//CreateTag
exports.CreateTag = (req,res) => {
    const tag = new Tag(req.body);
    tag.save((err, tag) => {
        if(err){
            return res.status(400).json({
                error: "Tag Creation Unsuccessful"
            })
        }
        res.json({tag})
    })
}

//DeleteTag
exports.DeleteTag = (req,res) => {
    const tag = req.tag;
    tag.remove((err, tag) => {
        if(err) {
            return res.status(400).json({
                error: "Tag Deletion Unsuccessful"
            })
        }
        res.json({
            message: "Tag Successfully Deleted"
        })
    })
}



