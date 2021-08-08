// const drink = {
//   color: "brown",
//   carbonated: true,
//   sugar: 40,
// };

type Drink = [string, boolean, number];

//This converts it to a tuple instead of an array
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 50];
const tea: Drink = ["brown", false, 0];

console.log(pepsi);
