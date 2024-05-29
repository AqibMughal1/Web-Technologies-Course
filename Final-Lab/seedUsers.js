// seedUsers.js
const mongoose = require('mongoose');
const User = require('./models/user'); // Adjust the path as necessary
const bcrypt = require('bcrypt');

// MongoDB connection string
const dbUrl = 'mongodb://localhost:27017/apple-resellers';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connection open');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});

const seedUsers = async () => {
  await User.deleteMany({});

  const adminPassword = await bcrypt.hash('12345', 12);

  const users = [
    {
      name: "Admin User",
      email: "admin@example.com",
      password: adminPassword,
      contact: "123-456-7890",
      address: "123 Admin St, Admin City, Admin State"
    },
    {
      name: "John Doe",
      email: "john@example.com",
      password: await bcrypt.hash('password123', 12),
      contact: "123-456-7891",
      address: "123 John St, John City, John State"
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      password: await bcrypt.hash('password123', 12),
      contact: "123-456-7892",
      address: "123 Jane St, Jane City, Jane State"
    }
    // Add more users if needed
  ];

  await User.insertMany(users);
  console.log('Users seeded');
  mongoose.connection.close();
};

seedUsers().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
