let favoriteColors = [];

function addColor(color) {
  favoriteColors.push(color); 
}

const printColors = () => {
  console.log('Favorite Colors List:');
  favoriteColors.forEach((color, index) => {
    console.log(`${index + 1}. ${color}`);
  });
};

addColor('Red');
printColors();
addColor('Blue');
printColors();
addColor('Green');
printColors();
addColor('Pink');
printColors();

