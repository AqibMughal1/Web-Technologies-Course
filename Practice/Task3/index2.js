const favoriteFruits = ['Apple', 'Banana', 'Mango'];

function printFruit(fruit, index) {
  console.log(`${index + 1}. ${fruit}`);
}

favoriteFruits.forEach(printFruit);

const addFruit = (fruit) => {
  favoriteFruits.push(fruit);
  console.log('Updated Fruit List:');
  favoriteFruits.forEach(printFruit);
};

addFruit('Pineapple');
