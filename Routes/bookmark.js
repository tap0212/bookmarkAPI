const express = require('express')

const router = express.Router()
const {getBookmarkById, getAllBookmarks, CreateBookmark , DeleteBookmark} = require('../Controllers/bookmark')

//params
router.param("bookmarkId", getBookmarkById)
//getAllBookmarks
router.get('/bookmarks', getAllBookmarks)
//Create a Bookmark
router.post('/create/bookmark', CreateBookmark);
//Delete a Bookmark
router.delete('/remove/bookmark/:bookmarkId', DeleteBookmark)


module.exports  = router;