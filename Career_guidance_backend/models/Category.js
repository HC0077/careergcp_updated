const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  img: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  resources: [
    {
      title: {
        type: String,
        required: true
      },
      link: {
        type: String
      },
      description: {
        type: String
      }
    }
  ],
  icon: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Category', CategorySchema); 