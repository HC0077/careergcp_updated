const express = require('express');
const router = express.Router();
const {
  getBookings,
  getBooking,
  addBooking,
  updateBookingStatus,
  getMyBookings,
  getMentorBookings
} = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/auth');

// Routes
router.route('/')
  .get(protect, authorize('admin'), getBookings)
  .post(protect, addBooking);

router.route('/:id')
  .get(protect, getBooking)
  .put(protect, updateBookingStatus);

router.get('/me', protect, getMyBookings);
router.get('/mentor/:mentorId', protect, getMentorBookings);

module.exports = router; 