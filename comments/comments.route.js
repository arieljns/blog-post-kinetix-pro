const express = require('express');

const router = express.Router();
const commentsController = require('./comments.controller');

router.get('/', commentsController.createComment);

module.exports = router;