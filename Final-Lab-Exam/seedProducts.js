const mongoose = require('mongoose');
const Product = require('./models/product'); // Adjust the path as necessary

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

const seedProducts = [
  // Smartphones
  {
    productType: "smartphone",
    price: 999,
    model: "iPhone 14 Pro",
    variant: "128GB/Space Gray",
    ram: 6,
    storage: 128,
    specs: ["5G", "OLED display", "Triple-camera"],
    modelYear: 2022,
    chip: "A16 Bionic",
    screenSize: 6.1,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "smartphone",
    price: 799,
    model: "iPhone 13",
    variant: "128GB/Blue",
    ram: 4,
    storage: 128,
    specs: ["5G", "Super Retina XDR display"],
    modelYear: 2021,
    chip: "A15 Bionic",
    screenSize: 6.1,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "smartphone",
    price: 499,
    model: "iPhone SE",
    variant: "64GB/Black",
    ram: 3,
    storage: 64,
    specs: ["4G LTE", "Retina HD display"],
    modelYear: 2020,
    chip: "A13 Bionic",
    screenSize: 4.7,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  // Laptops
  {
    productType: "laptop",
    price: 1999,
    model: "MacBook Pro",
    variant: "16GB/512GB SSD",
    ram: 16,
    storage: 512,
    specs: ["M1 Pro chip", "Liquid Retina XDR display"],
    modelYear: 2021,
    chip: "M1 Pro",
    screenSize: 14.2,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "laptop",
    price: 999,
    model: "MacBook Air",
    variant: "8GB/256GB SSD",
    ram: 8,
    storage: 256,
    specs: ["M1 chip", "Retina display"],
    modelYear: 2020,
    chip: "M1",
    screenSize: 13.3,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  // Desktops
  {
    productType: "desktop",
    price: 1299,
    model: "iMac",
    variant: "8GB/256GB SSD",
    ram: 8,
    storage: 256,
    specs: ["M1 chip", "4.5K Retina display"],
    modelYear: 2021,
    chip: "M1",
    screenSize: 24,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "desktop",
    price: 699,
    model: "Mac Mini",
    variant: "8GB/256GB SSD",
    ram: 8,
    storage: 256,
    specs: ["M1 chip"],
    modelYear: 2020,
    chip: "M1",
    screenSize: 0, // No display
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  // Tablets
  {
    productType: "tablet",
    price: 1099,
    model: "iPad Pro",
    variant: "128GB/Space Gray",
    ram: 8,
    storage: 128,
    specs: ["M1 chip", "Liquid Retina display"],
    modelYear: 2021,
    chip: "M1",
    screenSize: 12.9,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "tablet",
    price: 599,
    model: "iPad Air",
    variant: "64GB/Rose Gold",
    ram: 4,
    storage: 64,
    specs: ["A14 Bionic chip", "Liquid Retina display"],
    modelYear: 2020,
    chip: "A14 Bionic",
    screenSize: 10.9,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  // Wearables
  {
    productType: "wearable",
    price: 399,
    model: "Apple Watch Series 7",
    variant: "45mm/Space Gray",
    ram: 1,
    storage: 32,
    specs: ["GPS", "Always-On Retina display"],
    modelYear: 2021,
    chip: "S7",
    screenSize: 1.9,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "wearable",
    price: 279,
    model: "Apple Watch SE",
    variant: "44mm/Silver",
    ram: 1,
    storage: 32,
    specs: ["GPS", "Retina display"],
    modelYear: 2020,
    chip: "S5",
    screenSize: 1.78,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  // Accessories
  {
    productType: "accessory",
    price: 249,
    model: "AirPods Pro",
    variant: "White",
    ram: 0,
    storage: 0,
    specs: ["Active Noise Cancellation", "Transparency mode"],
    modelYear: 2019,
    chip: "H1",
    screenSize: 0,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "accessory",
    price: 99,
    model: "HomePod mini",
    variant: "Space Gray",
    ram: 0,
    storage: 0,
    specs: ["Siri", "360-degree sound"],
    modelYear: 2020,
    chip: "S5",
    screenSize: 0,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  }
];

async function seed() {
  try {
    for (let product of seedProducts) {
      await Product.findOneAndUpdate(
        { model: product.model, variant: product.variant },
        product,
        { upsert: true, new: true }
      );
    }
    console.log('Products seeded successfully');
  } catch (err) {
    console.error('Error seeding products:', err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
