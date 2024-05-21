const express = require('express');
const router = express.Router();
const NewsController = require('../controller/news.controller');

// Create
router.post('/', NewsController.createNews);

// Read
router.get('/', NewsController.getNews);

// Update
router.put('/:id', NewsController.updateNews);

// Delete
router.delete('/:id', NewsController.deleteNews);

module.exports = router;
