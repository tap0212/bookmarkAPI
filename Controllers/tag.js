const Bookmark = require('../models/bookmark')
const Tag = require('../models/tag')
//   getAllTags, CreateTag , DeleteTag


//getAllTags
exports.getAllTags = (req,res) => {
    Tag.find()
    .exec()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(400).json({
                error: "No Categories Found"
            })
        })
}
//CreateTag
exports.CreateTag = (req,res) => {
    const tag = new Tag(req.body);
    tag.save()
        .then(result => {
            res.json({result})
        })
        .catch(err => {
            res.status(400).json({
                error: "Tag Creation Unsuccessful"
            })
        })

}

//DeleteTag
exports.DeleteTag = (req,res) => {
    const tag = req.params.tagId
    Tag.findOneAndRemove(tag)
        .exec()
            .then(result => {
                res.json({
                    massage:"Tag Deletion Successful"
                })
            })
            .catch(err => {
                res.status(200).json({
                    message:"Tag Deletion unsuccessful"
                })
            })
}



