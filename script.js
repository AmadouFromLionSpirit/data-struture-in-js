'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
 
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function(obj) {
    console.log(obj);
  },
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
})
const [starter, main] = restaurant.order(2,0);
console.log(starter, main);

const nested = [2,4,[5,6]];
let [first, ,third] = nested;
console.log(first, third);

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//Mutating variables
let a = 111;
let b = 999;


const obj = {a:23, b:7, c:14};
({a,b} = obj);
console.log(a,b);

//Nested objects
const {
  fri: {open, close}
} = openingHours;
console.log(open, close);

//The spread operator to expand an array
const arr = [7,8,9];
const newArr = [1,2, ...arr];
console.log(newArr);

//we want the individual elements of the array, wez will use the spread operator
console.log(...newArr);

//We want to add a new Menu in the main menu
const newMenu = [...restaurant.mainMenu, 'Thiebou Dieune Penda Mbaye'];
console.log(newMenu);

//copy shallow copy of array
const mainMenuCopy = [... restaurant.mainMenu];
console.log(mainMenuCopy);

//Join two arrays or merge
const joinArrays = [...restaurant.starterMenu, ...newMenu];
console.log(joinArrays);

//Iterables are arrays, strings, maps sets but not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.' ];
console.log(letters);

//Real world example
/* const ingredients = [prompt(`Let\'s make pasta! Ingredient 1?`),
prompt('Ingredient 2?'),
prompt('Ingredient 3')

]; */
//console.log(ingredients);
//const [ing1, ing2, ing3] = ingredients;

//restaurant.orderPasta(...ingredients);

//Objects 
const newRestaurant = {foundedIn: 1998, ...restaurant, founder:'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//SPREAD, because on RIGHT side of =

const arr2 = [1,2, ...[3,4]];

//REST, because on LEFT side of = 
const [x,y,... others] = [1,2,3,4,5];
console.log(x,y,others);

const [pizza, ,risotto, ...otherFood] = [
  ...restaurant.mainMenu, ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood);

//REST elements in objects  (rest operator is taking multiples values and packing them
//into one array)
const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);

//Functions 
const add = function(...numbers) {
  console.log(numbers);
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
}

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const m = [23,5,7];
add(...m);

restaurant.orderPizza('mushrooms','onion','olives','spinach');

//Logical operators
  //use any data type, return any data type, short-circuiting
  //The OR operatoor short circuit when the value is true
  console.log('-----OR---------')
  console.log(3 || 'Jonas');
// The ANd operator short circuit when the value is falsy
  console.log('-----AND---------')
  console.log(0 && 'Jonas');
  console.log(7 && 'Jonas');
  
  //The nullish coalescing operattor (opérateur de fusion null) works with the concept of nullish values insta=ead of falsy values ------------ And nullish values are null and undefined
  //It does not include zero or the empty string , for the nullish operator, zero and empty string are not falsy values
  // restaurant.numGuests = 0;
  const guests = restaurant.numGuests || 10;
  console.log(guests);

  const guestCorrect = restaurant.numGuests ?? 10;
  console.log(guestCorrect);

  //We set a default value to rest2

  const rest1 = {
    name:'Capri',
    numGuests:0,
  };

  const rest2 = {
    name:'La Piazza',
    owner: 'Giovanni Rossi',
  }
// Logical Assignement Operators 
 /*  rest1.numGuests = rest1.numGuests || 10;
  rest2.numGuests = rest2.numGuests || 10; */
    //OR assignement operator
/*   rest1.numGuests ||=10;
  rest2.numGuests ||=10;

  console.log(rest1);
  console.log(rest2);
 */
  //Logical nullish assignement operator -- operateur d'affectation logique null
    //Tout ce qu'il faut c'est changer le or pour le nullish coalescing operator
    rest1.numGuests ??=10;
    rest2.numGuests ??=10;



  //logical and(&&) assignement operator
  rest2.owner = rest2.owner && '<ANONYMOUS>';
  console.log(rest1);
  console.log(rest2);
console.log('-----------------------Data structure Challenge----------------')
  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
   
  };

  //1)
  /* const players1 = ['Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski'];

  const players2 = [ 'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze']; */

  //Other solution by destructuring
  const [players1, players2] = game.players;
  console.log(players1, players2);
//2)
  let [gk,...fieldPlayers] = players1;
  console.log(gk, fieldPlayers);
  //3)
  const allPlayers = [...players1,...players2];
  console.log('The size of allPlayers array is: '+allPlayers.length),
  console.log(allPlayers);

  //4)
  const players1Final = [...players1, 'Thiago','Coutinho','Perisic'];
  console.log(players1Final);

  //5)
 /*  const team1 = game.odds.team1;
  const draw = game.odds.x;
  const team2 = game.odds.team2; */
  //Another method
  const {odds: {team1, x:draw, team2}} = game;
 // const [team1,draw,team2] = game.odds;
  console.log(team1,draw, team2);

  //6)
  const printGoals = function(...players) {
    console.log(`${players.length} goals were scored`);
  }
printGoals('Davies','Muller','Lewandowski','Kimmich');
printGoals('Davies','Muller');
printGoals(...game.scored);
//7) 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

//Looping over arrays new way introduced in ES 6
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(const item of menu) console.log(item);

//for(const [i,el] of menu.entries()) {} <---- For the destructuring way below
for (const item of menu.entries()) {
 // console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
  //with destructuring way what is inside the curly braces at the top in comment
  //console.log(`${i+1}: ${el}`);
  
}

//Optional Chaining from ES 2020 -> if a certain property doesn't exists
//undefined is returned immediately
//we want to get the opening hours of our restaurant for monday
if (restaurant.openingHours.mon) 
console.log(restaurant.openingHours.mon);

if(restaurant.openingHours && restaurant.openingHours.mon) 
console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open)


const greet = greeting => name => console.log(`${greeting} ${name}`);
const greeterHey = greet('Hey');
greeterHey('Amadou');


