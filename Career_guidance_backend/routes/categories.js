const express = require('express');
const router = express.Router();
const {
  getCategories,
  getCategory,
  getCategoryByPath,
  createCategory,
  updateCategory
} = require('../controllers/categoryController');
const { protect, authorize } = require('../middleware/auth');

// Routes
router.route('/')
  .get(getCategories)
  .post(protect, authorize('admin'), createCategory);

router.route('/:id')
  .get(getCategory)
  .put(protect, authorize('admin'), updateCategory);

router.get('/path/:pathName', getCategoryByPath);

module.exports = router; 