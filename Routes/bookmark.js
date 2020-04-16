const express = require('express')

const router = express.Router()
const {getBookmarkById, getAllBookmarks, RemoveTag, addAnotherTag, CreateBookmark , DeleteBookmark} = require('../Controllers/bookmark')

//params
router.param("bookmarkId", getBookmarkById)
//getAllBookmarks
router.get('/bookmarks', getAllBookmarks)
//Create a Bookmark
router.post('/create/bookmark', CreateBookmark);
//Delete a Bookmark
router.delete('/remove/bookmark/:bookmarkId', DeleteBookmark)
// Add another tag
router.patch('/addtag/:bookmarkId/:tagId', addAnotherTag)
// Remove a tag
router.patch('/removetag/:bookmarkId/:tagId', RemoveTag)



module.exports  = router;