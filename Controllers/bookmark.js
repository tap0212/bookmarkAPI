const Bookmark = require('../models/bookmark')
const Tag = require('../models/tag')

//  getBookmarkById, getAllBookmarks, CreateBookmark , DeleteBookmark
//getBookmarkById
exports.getBookmarkById = (req,res,next,id) => {
    Bookmark.findById(id).exec((err, bm) => {
        if(err) {
            return res.status(400).json({
                error: "Bookmark Not Found"
            })
        }
        req.bookmark = bm;
        next();
    })
}
//getAllBookmarks
exports.getAllBookmarks = (req,res) => {
    Bookmark.find().exec((err, bookmarks) => {
        if(err) {
            return res.status(400).json({
                error: "No Categories Found"
            })
        }
        res.json(bookmarks)
    })
}
//CreateBookmark
exports.CreateBookmark = (req,res) => {
    const bookmark = new Bookmark(req.body);
    bookmark.save((err, bookmark) => {
        if(err){
            return res.status(400).json({
                error: "Bookmark Creation Unsuccessful"
            })
        }
        res.json({bookmark})
    })
}
// Add another tag
exports.addAnotherTag = (req, res) => {
    const id = req.params.bookmarkId
    Bookmark.findById(id)
    .exec()
    .then(result => {
        const updatedTags = result.tags
        updatedTags.push(req.params.tagId)
        result.save()
        res.json({result})
    })
    .catch(err => console.log(err))
}

// remove a tag
exports.RemoveTag = (req, res) => {
    Bookmark.findById(req.params.bookmarkId)
    .exec()
    .then(result => {
        const remainingTags = result.tags
        remainingTags.pop(req.params.tagId)
        result.save()
        res.status(201).json({
            message: 'Tag removed successfully',
            result
        })
    })
    .catch(err => {
        res.status(401).json({err})
    })
}

//DeleteBookmark
exports.DeleteBookmark = (req,res) => {
    const bookmark = req.bookmark;
    bookmark.remove((err, bookmark) => {
        if(err) {
            return res.status(400).json({
                error: "Bookmark Deletion Unsuccessful"
            })
        }
        res.json({
            message: "Bookmark Successfully Deleted"
        })
    })
}



