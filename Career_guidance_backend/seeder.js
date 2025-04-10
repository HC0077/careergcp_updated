const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

// Load env vars
dotenv.config();

// Load models
const User = require('./models/User');
const Mentor = require('./models/Mentor');
const Category = require('./models/Category');
const Booking = require('./models/Booking');

// Load data
const categories = require('./data/categories');
const mentors = require('./data/mentors');
const { createUsersData } = require('./data/users');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Import into DB
const importData = async () => {
  try {
    // Clear all data
    await User.deleteMany();
    await Mentor.deleteMany();
    await Category.deleteMany();
    await Booking.deleteMany();

    // Create users
    const users = await createUsersData();
    await User.insertMany(users);
    console.log('Users imported...'.green.inverse);

    // Create categories
    await Category.insertMany(categories);
    console.log('Categories imported...'.green.inverse);

    // Create mentors
    await Mentor.insertMany(mentors);
    console.log('Mentors imported...'.green.inverse);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Delete all data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Mentor.deleteMany();
    await Category.deleteMany();
    await Booking.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Command line args
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
} 