/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (keyFood, keyDrink, price) => 
   ({
    fetchMenu: () => ({
        food: {
              food: keyFood,
              value: Number(price),
        },
        drinks: { 
              drinks: keyDrink,
              value: Number(price),
        },
      }),
  });
  
module.exports = createMenu;
