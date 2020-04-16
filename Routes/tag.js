const express = require('express')

const router = express.Router()
const {getTagById, getAllTags, CreateTag , DeleteTag} = require('../Controllers/tag')

//getAllTags
router.get('/tags', getAllTags)
//Create a Tag
router.post('/create/tag', CreateTag);
//Delete a Tag
router.delete('/remove/tag/:tagId', DeleteTag)
//AddATag



module.exports  = router;