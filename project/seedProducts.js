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
  {
    productType: "smartphone",
    model: "iPhone 12",
    variant: "128GB/White",
    ram: 4,
    storage: 128,
    specs: ["5G", "Super Retina XDR display"],
    modelYear: 2020,
    chip: "A14 Bionic",
    screenSize: 6.1,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "smartphone",
    model: "iPhone 11",
    variant: "64GB/Green",
    ram: 4,
    storage: 64,
    specs: ["4G LTE", "Liquid Retina HD display"],
    modelYear: 2019,
    chip: "A13 Bionic",
    screenSize: 6.1,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "smartphone",
    model: "iPhone XR",
    variant: "64GB/Red",
    ram: 3,
    storage: 64,
    specs: ["4G LTE", "Liquid Retina HD display"],
    modelYear: 2018,
    chip: "A12 Bionic",
    screenSize: 6.1,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  // Laptops
  {
    productType: "laptop",
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
  {
    productType: "laptop",
    model: "MacBook Pro",
    variant: "16GB/1TB SSD",
    ram: 16,
    storage: 1024,
    specs: ["M1 Max chip", "Liquid Retina XDR display"],
    modelYear: 2021,
    chip: "M1 Max",
    screenSize: 16,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "laptop",
    model: "MacBook Air",
    variant: "16GB/512GB SSD",
    ram: 16,
    storage: 512,
    specs: ["M2 chip", "Liquid Retina display"],
    modelYear: 2022,
    chip: "M2",
    screenSize: 13.6,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "laptop",
    model: "MacBook",
    variant: "8GB/256GB SSD",
    ram: 8,
    storage: 256,
    specs: ["Intel Core m3", "Retina display"],
    modelYear: 2017,
    chip: "Intel Core m3",
    screenSize: 12,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  // Desktops
  {
    productType: "desktop",
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
  {
    productType: "desktop",
    model: "iMac Pro",
    variant: "32GB/1TB SSD",
    ram: 32,
    storage: 1024,
    specs: ["Xeon W processor", "5K Retina display"],
    modelYear: 2017,
    chip: "Intel Xeon W",
    screenSize: 27,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "desktop",
    model: "iMac",
    variant: "16GB/512GB SSD",
    ram: 16,
    storage: 512,
    specs: ["Intel Core i9", "5K Retina display"],
    modelYear: 2019,
    chip: "Intel Core i9",
    screenSize: 27,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "desktop",
    model: "Mac Pro",
    variant: "32GB/1TB SSD",
    ram: 32,
    storage: 1024,
    specs: ["Intel Xeon W", "Modular design"],
    modelYear: 2019,
    chip: "Intel Xeon W",
    screenSize: 0, // No display
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  // Tablets
  {
    productType: "tablet",
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
  {
    productType: "tablet",
    model: "iPad",
    variant: "32GB/Silver",
    ram: 3,
    storage: 32,
    specs: ["A12 Bionic chip", "Retina display"],
    modelYear: 2019,
    chip: "A12 Bionic",
    screenSize: 10.2,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "tablet",
    model: "iPad Mini",
    variant: "64GB/Gold",
    ram: 3,
    storage: 64,
    specs: ["A12 Bionic chip", "Retina display"],
    modelYear: 2019,
    chip: "A12 Bionic",
    screenSize: 7.9,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "tablet",
    model: "iPad Pro",
    variant: "256GB/Silver",
    ram: 8,
    storage: 256,
    specs: ["M1 chip", "Liquid Retina display"],
    modelYear: 2021,
    chip: "M1",
    screenSize: 11,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  // Wearables
  {
    productType: "wearable",
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
  {
    productType: "wearable",
    model: "Apple Watch Series 6",
    variant: "40mm/Gold",
    ram: 1,
    storage: 32,
    specs: ["GPS", "Always-On Retina display"],
    modelYear: 2020,
    chip: "S6",
    screenSize: 1.73,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "wearable",
    model: "Apple Watch Series 5",
    variant: "44mm/Space Black",
    ram: 1,
    storage: 32,
    specs: ["GPS", "Always-On Retina display"],
    modelYear: 2019,
    chip: "S5",
    screenSize: 1.78,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "wearable",
    model: "Apple Watch Series 3",
    variant: "38mm/White",
    ram: 0.75,
    storage: 8,
    specs: ["GPS", "Retina display"],
    modelYear: 2017,
    chip: "S3",
    screenSize: 1.65,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  // Accessories
  {
    productType: "accessory",
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
    model: "HomePod mini",
    variant: "Space Gray",
    ram: 0,
    storage: 0,
    specs: ["Siri", "360-degree sound"],
    modelYear: 2020,
    chip: "S5",
    screenSize: 0,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "accessory",
    model: "Apple TV 4K",
    variant: "32GB",
    ram: 3,
    storage: 32,
    specs: ["A12 Bionic chip", "Dolby Vision"],
    modelYear: 2021,
    chip: "A12 Bionic",
    screenSize: 0,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "accessory",
    model: "Magic Keyboard",
    variant: "White",
    ram: 0,
    storage: 0,
    specs: ["Backlit keys", "Multi-Touch trackpad"],
    modelYear: 2020,
    chip: "None",
    screenSize: 0,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  },
  {
    productType: "accessory",
    model: "AirPods Max",
    variant: "Space Gray",
    ram: 0,
    storage: 0,
    specs: ["Active Noise Cancellation", "Spatial audio"],
    modelYear: 2020,
    chip: "H1",
    screenSize: 0,
    image: "https://fakeimg.pl/600x400?text=Item+Placeholder"
  }
];

Product.deleteMany({})
  .then(() => {
    return Product.insertMany(seedProducts);
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
