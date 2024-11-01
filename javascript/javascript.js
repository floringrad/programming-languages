// Revisit JavaScript

// ==========================================
//1. Comments

// One-lined comment, self-explanatory
/* Several-lined
comments
are back! */

// ==========================================
//2. Strict mode

// only whitespace and comments are allowed
// before the use-strict pragma
"use strict";
// the rest of the file runs in strict mode

// Imports
// TODO

// ==========================================
//3. Coding style

// Lines end with semi-colon

// ==========================================
//4. Debug

// ------------------------------------------
// 4.1 Console
// console.log("Console.log helps with debugging!");

// ------------------------------------------
// 4.2 Errors Handling

// 4.2.1 Stopping error

// This stops the program
// console.log(a + b);

// 4.2.2 Try, catch blocks

// try {
//   console.log(a + b);
// } catch (err) {
//   console.log(err);
// }
// console.log("This line now runs");

// 4.3 Try, throw, catch
// No need to have an error, we can throw one

// try {
//   throw new Error("Oops! an error");
// } catch (err) {
//   console.log(err);
// }
// console.log("This line now runs");

// ==========================================
//5. Variables

// ------------------------------------------
// 5.1 Declaration

// var weatherStatus = "sunny";
// let dayYearsNumber = 234;
// const iAmGettingYounger = false;

// In the function declaration here below
// the identifier iLearn and the parameter language are created
// They behave as var-declared

function iLearn(language) {
  console.log("This week I practice " + language + ".");
}
iLearn("JavaScript");

// In the catch declaration here below
// err is block-scoped as if it had been declared with let
// try {
//   someError();
// } catch (err) {
//   console.log(err);
// }

// The let keyword has some differences to var, with the most obvious being that
// let allows a more limited access to the variable than var. This is called
// "block scoping" as opposed to regular or function scoping. (KS)

// ------------------------------------------
// 5.2 Data Types

// Test it with typeof
// console.log(typeof weatherStatus);

// ------------------------------------------
// 5.2.1 Primitives

// --------
// Strings
var greeting = "Hello, World!";
// console.log(greeting);

// ----------------
// More on Strings

// greeting.length == 13;
// greeting.charAt(4) == "o";
// greeting.concat(" How are").concat(" you ?");
// greeting.indexOf("o") == 4;
// greeting.lastIndexOf("o") == 8;
// greeting.split("l") == [ "He", "", "o, Wor", "d!" ];
// greeting.toUpperCase() == "HELLO, WORLD!;
// greeting.toLowerCase() == "hello, world!";

// ------------------
// Template Literals

// Template literals are an alternative way of working with strings,
// which was introduced in the ES6 addition to the JavaScript language.

// It's a template string known as template literal.
// `Hello, World!` // with backticks
//  With template literals, an expression can be embedded in a placeholder.
// A placeholder is represented by ${}, with anything within the curly brackets
// treated as JavaScript and anything outside the brackets treated as a string:

// Interpolation
// console.log(`First programs usually print: ${greeting}`);

// Besides variable interpolation, template strings can span multiple lines.
// `Hello,
// World
// !
// `

// With string literals, the following code will throw an error:

// "Hello,
// World"

// Put simply, template literals allow for multi-line strings - something that
// simply isn't possible with string literals.

// This opens up a host of possibilities.
// For example, it's possible to evaluate a ternary expression inside a template literal.

// Some additional use cases of template literals are nested template literals and
// tagged templates.

// Boolean
var postTruthEra = true;
// Number
var earthPlanetPosition = 3;
var eulerNumber = Math.E; // 2.718281828459045

// Interpolation
console.log(`First programs usually print: ${greeting}`);

// ------------------------------------------
// 5.2.2 Objects

// They are an unordered, keyed collection of any various values.
// With Objects, keys can only be strings and symbols.
// You access the element by a string location name (aka "key" or "property")
// rather than by its numeric position (as with arrays)

var lastTravel = {
  country: "Netherlands",
  capital: "Amsterdam",
  favoriteMuseums: ["Van Gogh", "Rembrandt", "Rijksmuseum"],
  transportUsed: "bus",
  transportHours: 4,
};

// Dot notation and bracket notation
console.log(
  "The capital of " + lastTravel.country + " is " + lastTravel["capital"] + "."
);

// -----------------------------------
// Working with Objects in JavaScript

// Converting Objects to Arrays

// const result = [];
// const drone = {
//   speed: 100,
//   color: "yellow",
// };
// const droneKeys = Object.keys(drone);
// droneKeys.forEach(function (key) {
//   result.push(key, drone[key]);
// });
// console.log(result);

// --------------------
// The Spread operator

// It's characterized by three dots '...'

// showItinerary(...top7) // here top7 is an array of top7 destinations

// ------------------
// The Rest operator

// Destructuring

// const [] = top7;
// const [first, second, third, ...secondVisit] = top7;

// here secondVisit is sa sub-array

// -----------------------------------
// It can also be used with functions

// function addTaxToPrices(taxRate, ...itemsBought) {
//   return itemsBought.map((item) => taxRate * item);
// }

// let shoppingChart = addTaxToPrices(1.1, 46, 89, 35, 79);
// console.log(shoppingChart);

// ---------------------------------------------
// Join arrays, objects using the rest operator

// const fruits = ['apple', 'pear', 'plum']
// const berries = ['blueberry', 'strawberry']
// const fruitsAndBerries = [...fruits, ...berries] // concatenate
// console.log(fruitsAndBerries); // outputs a single array

// --------------------------------
// It's also easy to join objects:

// const flying = { wings: 2 }
// const car = { wheels: 4 }
// const flyingCar = {...flying, ...car}
// console.log(flyingCar) // {wings: 2, wheels: 4}

// ----------------------------------------------------------
// Add new members to arrays without using the push() method

// let veggies = ['onion', 'parsley'];
// veggies = [...veggies, 'carrot', 'beetroot'];
// console.log(veggies);

// -------------------------------------------------------
// Convert a string to an array using the spread operator

// const greeting = "Hello";
// const arrayOfChars = [...greeting];
// console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// ------------------------------------------------------
// Copy either an object or an array into a separate one

// const car1 = {
//   speed: 200,
//   color: "yellow",
// };
// const car2 = { ...car1 };
// car1.speed = 201;
// console.log(car1.speed, car2.speed); // 201, 200

// --------------------------------------------------------
// You can copy an array into a completely separate array,
// also using the spread operator, like this:

// const fruits1 = ["apples", "pears"];
// const fruits2 = [...fruits1];
// fruits1.pop();
// console.log(fruits1, "not", fruits2);

//

// --------------------------------
// Working with Maps in JavaScript

// let bestBoxers = new Map();
// bestBoxers.set(1, "The Champion");
// bestBoxers.set(2, "The Runner-up");
// bestBoxers.set(3, "The third place");

// console.log(bestBoxers);
// bestBoxers.get(1); // 'The Champion'

// --------------------------------
// Working with Sets in JavaScript

// A set is a collection of unique values.
// This means that we can use it to quickly filter an array for unique members.

// const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
// const uniqueFruits = new Set(repetitiveFruits);
// console.log(uniqueFruits);

// ------------------------------------
// Other data structures in JavaScript

// Besides the built-in data structures in JavaScript, it's possible to build non-native,
// custom data structures.

// These data structures come built-in natively in some other programming languages
// or even those other programming languages don't support them natively.

// Some more advanced data structures that have not been covered include:

// - Queues
// - Linked lists (singly-linked and doubly-linked)
// - Trees
// - Graphs

// -------------------------------
// Some special object types are
// Array, Null

// ------------------------------------------
// 5.2.2.1 Arrays
// In JS arrays are special type of objects
// They are ordered and numerically indexed lists of data

var seasons = ["spring", "summer", "autumn", "winter"];

console.log(`Last ${seasons[3]}, I traveled to ${lastTravel.capital}.`);
console.log(`I visited the ${lastTravel.favoriteMuseums[2]} museum.`);

// They are 0-indexed
console.log(`We are now in ${seasons[2]}.`);

// Push, Pop
seasons.push("eternal spring");
seasons.pop();

// ---------------------------
// Methods existing on arrays

// -----------
//  forEach()

// const fruits = ["kiwi", "mango", "apple", "pear"];
// function appendIndex(fruit, index) {
//   console.log(`${index}. ${fruit}`);
// }
// fruits.forEach(appendIndex);

// Very often, the function that the forEach() method needs to use is
// passed in directly into the method call, like this:

// const veggies = ["onion", "garlic", "potato"];
// veggies.forEach(function (veggie, index) {
//   console.log(`${index}. ${veggie}`);
// });

// ---------
// filter()

// It filters your arrays based on a specific test.
// Those array items that pass the test are returned.

// const numbers = [0, 10, 20, 30, 40, 50];
// numbers.filter(function (num) {
//   return num > 20;
// });

// ------
// map()

// This method is used to map each array item over to another array's item,
// based on whatever work is performed inside the function that is passed-in
// <to the map as a parameter.

// [0, 10, 20, 30, 40, 50].map(function (num) {
//   return num / 10;
// });

// ------------------------------------------
// 5.2.2.2 Maps

// They are iterable, contrary to Objects
// Any value can be used as a key
// With Objects, keys can only be strings and symbols

// ------------------------------------------
// 5.2.2.3 Sets

// It's collection, where each item must be unique.

// ------------------------------------------
// 5.2.2.4 Null

// ------------------------------------------
// 5.2.2.5 Math object

// Number constants
// Math.PI;  // 3.14159
// Math.E;   // 2.718
// Math.LN2; // 0.693

// Rounding methods
// Math.ceil(Math.PI) == 4;
// Math.floor(Math.PI) == 3;
// Math.round(Math.PI) == 3;
// Math.trunc(Math.PI) == 3;

// Arithmetic and calculus methods
// Math.pow(2, 3) == 8;
// Math.sqrt(16) == 4;
// Math.cbrt(8) == 2;
// Math.abs(-10) == 10;

// Logarithmic methods
// Math.log();
// Math.log2();
// Math.log10();

// Min and Max
// Math.min(9, 8, 7) == 7;
// Math.max(9, 8, 7) == 9;

// Trigonometric methods
// Math.sin();
// Math.cos();
// Math.tan(); // etc

// ------------------------------------------
// 5.2.3 Undefined

// ------------------------------------------
// Functions

// In JS, functions are values that can be assigned (as shown in this snippet) and passed around.
// In fact, JS functions are a special type of the object value type.
// You can only return a single value, but if you have more values to return,
// you can wrap them up into a single object/array.
// here below the variable's type is function

var seasonsMood = function howIFeelAbout(season) {
  return `I love ${season}.`;
};

console.log(seasonsMood(seasons[2]));

// Scope
// Local vs Global scope vs Block Scope

// A variable declared inside a function has a local scope.
// From within a function one can access global variables,
// but not the other way around.

// In ES5 we only have local scope.
// In ES6 we introduce block scope.
// Block-scoped variables can be declared using
// let or const.

// With let and const, contrary to var:
// - you cannot use a variable before it's declared
// - a variable cannot be redeclared
// - it's scoped to the block

// ------------------------------------------
// Functional Programming (FP)
// Keeps data and functionality separate

// Other concepts in FP:

// ----------------------
// First Class Functions

// Functions in JavaScript are “first-class citizens”.
// ie a function in JavaScript is just another value that we can:
// - pass to other functions
// - save in a variable
// return from other functions

// -----------------------
// Higher order Functions
// a function that has either one or both of the following characteristics:
// - It accepts other functions as arguments
// - It returns functions when invoked

// --------------------------------
// Pure functions and side-effects
// A pure function returns the exact same result as long as it's given the same values.
// A pure function should not have side-effects.
// A side-effect is any instance where a function makes a change outside of itself.
// This includes:
// - changing variable values outside of the function itself,
//   or even relying on outside variables
// - calling a Browser API (even the console itself!)
// - calling Math.random() - since the value cannot be reliably repeated

// ------------------------------------------
// Arrow Functions

//

// ------------------------------------------
// Object-Oriented Programming (OOP)
// Uses objects to group related data and functionality

// ------------------------------------------
// Classes

// class ShoppingItem {
//   constructor() {
//
//   }
// }

// 'constructor' is a special function inside the ShoppingItem class.
// Notice that there is no 'function' keyword.
// Also notice that 'constructor' is used to define this function.
// The 'this' keyword is the future object instance of the ShoppingItem class.

class ShoppingItem {
  constructor(title, description, price) {
    this.title = title;
    this.description = description;
    this.price = price;
  }

  item_status() {
    return "The item is new!";
  }
}

const umbrella = new ShoppingItem("umbrella", "foldable umbrella", 20);
console.log("I will probably need a " + umbrella.description + ".");
// console.log(umbrella.item_status());

// Objects exist in a hierarchal structure, meaning the original base or super class
// for everything is the Object class, all objects derive from this class.
// This allows us to utilize the Object.create() method to create or instantiate
// objects of our classes.

// class ShoppingArticle {
//   /* ...class code here... */
// }
// var tShirt = Object.create(ShoppingArticle);
// console.log(tShirt);

// A more common method of creating objects from classes is to use the new  keyword.
//  When using a default or empty constructor method, JavaScript implicitly calls
// the Object superclass to create the instance.

// var pants = new ShoppingArticle();
// console.log(pants);

// ------------------------------------------
// The four fundamental OOP principles are:

// --------------
// - inheritance

// It works like this:
//   1. There is a base class of a "thing".
//   2. There is one or more sub-classes of "things" that inherit the properties
//      of the base class (sometimes also referred to as the "super-class")
//   3. There might be some other sub-sub-classes of "things" that inherit from those classes
//      in point 2.

// Note that each sub-class inherits from its super-class.
// In turn, a sub-class might also be a super-class, if there are classes inheriting
// from that sub-class.

// Example:
// 1. There is a base class of "ShoppingArticle".
// 2. There is another class, a sub-class inheriting from "ShoppingArticle",
//     and the name of this class is "ShoppingSpice".
// 3. Next, there is another class, inheriting from "ShoppingSpice", and this class is "Pepper".

// Thus, in the above example, I'm modelling objects from the real world by constructing
// relationships between ShoppingArticle, ShoppingSpice, and Pepper.
// Each of them are separate classes, meaning, each of them are separate blueprints for
// specific object instances that can be constructed as needed.

// To setup the inheritance relation between classes in JavaScript,
// I can use the extends keyword, as in class B extends A.

// class ShoppingArticle { /* ...class code here... */ }
// class ShoppingSpice extends ShoppingArticle { /* ...class code here... */ }
// class Pepper extends ShoppingSpice { /* ...class code here... */ }

// ----------
// Prototype

// In JavaScript, a Prototype is an object that can hold properties to be shared by
// multiple other objects.
// And that's why we says that Javascript implements a Prototypal inheritance model.

// var bird = {
//   hasWings: true,
//   canFly: true,
//   hasFeathers: true,
// };

// var eagle1 = Object.create(bird); // bird is the prototype
// var eagle2 = Object.create(bird); // bird is the prototype
// var penguin1 = Object.create(bird);
// penguin1.canFly = false;
// console.log(penguin1);

// ----------------
// - encapsulation

// It has to do with making a code implementation "hidden" from other users,
// in the sense that they don't have to know how my code works in order to "consume" the code.

// Example: "umbrella".toUpperCase()
// I don't really need to worry or even waste time thinking about how the toUpperCase() method
// works. All I want is to use it, since I know it's available to me. Even if the underlying
// syntax - that is, the implementation of the toUpperCase() method changes - as long as it
// doesn't break my code, I don't have to worry about what it does in the background, or even
// how it does it.

// ---------------
// - abstraction

// Is all about writing code in a way that will make it more generalized.

// Difference between encapsulation and abstraction
// - An abstraction is about extracting the concept of what you're trying to do, rather than
//   dealing with a specific manifestation of that concept.
// - Encapsulation is about you not having access to, or not being concerned with,
//   how some implementation works internally.

// ----------------
// - polymorphism

// Polymorphism is a word derived from the Greek language meaning "multiple forms".
// An alternative translation might be: "something that can take on many shapes".

// Example 1 :
// - A door has a bell. It could be said that the bell is a property of the door object.
//   This bell can be rung. When would someone ring a bell on the door? Obviously, to get
//   someone to show up at the door.
// - Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell
//   is a property of the bicycle object. This bell could also be rung. However, the reason,
//   the intention, and the result of somebody ringing the bell on a bicycle is not the same
//   as ringing the bell on a door.

// In JavaScript:
// const bicycle = {
//   bell: function() {
//       return "Ring, ring! Watch out, please!"
//   }
// }
// const door = {
//   bell: function() {
//       return "Ring, ring! Come here, please!"
//   }
// }

// Io make this code truly polymorphic, I will add another function declaration:
// function ringTheBell(thing) {
//   console.log(thing.bell())
// }

// ringTheBell(bicycle); // Ring, ring! Watch out, please!
// ringTheBell(door); // "Ring, ring! Come here, please!"

// Example 2 :
// The concat() built-in method is exhibiting polymorphic behavior since it behaves
// differently based on the context - in this case, based on what data types I give it.
// "abc".concat("def"); // 'abcdef' - used on strings
// "abc"].concat(["def"]); // ['abc', 'def'] - used on arrays

// polymorphism is useful because it allows developers to build objects that can have
// the exact same functionality, namely, functions with the exact same name, which behave
// exactly the same. However, at the same time, you can override some parts of the shared
// functionality or even the complete functionality, in some other parts of the OOP structure.

// Code:
// class Bird {
//   useWings() {
//       console.log("Flying!")
//   }
// }
// class Eagle extends Bird {
//   useWings() {
//       super.useWings()
//       console.log("Barely flapping!")
//   }
// }
// class Penguin extends Bird {
//   useWings() {
//       console.log("Diving!")
//   }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"

// The Penguin and Eagle sub-classes both inherit from the Bird super-class.
// The Eagle sub-class inherits the useWings() method from the Bird class, but extends
// it with an additional console log. The Penguin sub-class doesn't inherit the useWings()
// class - instead, it has its own implementation, although the Penguin class itself does
// extend the Bird class.

// =============
// Constructors

// JavaScript has a number of built-in object types, such as:
// Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.

// These objects are sometimes referred to as "native objects".
// Constructor functions, commonly referred to as just "constructors", are special functions
// that allow us to build instances of these built-in native objects.
// All the constructors are capitalized.

// To use a constructor function, I must prepend it with the operator new.

// For example, to create a new instance of the Date object, I can run: new Date().
// What I get back is the current datetime, such as:
// Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time)

// However, not all the built-in objects come with a constructor function.
// An example of such an object type is the built-in Math object.
// Running new Math() throws an Uncaught TypeError, informing us that Math is not a constructor.

// Besides constructor functions for the built-in objects, I can also define custom
// constructor functions.

// Besides not using constructors to build object versions of primitives, you are better off
// not using constructors when constructing plain, regular objects.
// Instead of new Object, you should stick to the object literal syntax: {}.

// Instead of using Array, Function, and RegExp constructors, you should use their array
// literal, function literal, and pattern literal varieties: [], () {}, and /()/.

// ==========================================
// Comparison

// Equality vs Equivalence comparison
// The strict equality operator "===" is "checking both the value and the type"
// specifically, it disallows any sort of type conversion
// (aka, "coercion") in its comparison

// 3 === 3.0; // true
// "yes" === "yes"; // true
// false === false; // true
// 42 === "42"; // false

// Note: the === operator is designed to lie in two cases of special values:
// NaN and -0.

// NaN === NaN; // false
// 0 === -0; // true

// Recommendation:
// For NaN comparisons, use the Number.isNaN(..) utility
// For -0 comparison, use the Object.is(..) utility

// But
// [ 1, 2, 3 ] === [ 1, 2, 3 ];    // false
// { a: 42 } === { a: 42 }         // false
// (x => x * 2) === (x => x * 2)   // false

// JS does not define === as structural equality for object values.
// Instead, === uses identity equality for object values
// In JS, all object values are held by reference, are assigned and passed by reference-copy,
// and are compared by reference (identity) equality.

// var x = [ 1, 2, 3 ];

// assignment is by reference-copy, so
// y references the *same* array as x,
// not another copy of it.
// var y = x;

// y === x;              // true
// y === [ 1, 2, 3 ];    // false
// x === [ 1, 2, 3 ];    // false

// JS does not provide a mechanism for structural equality comparison of object values,
// only reference identity comparison.
// To do structural equality comparison, you'll need to implement the checks yourself.

// ---------
// Coercion

// Coercion means a value of one type being converted to its respective representation
// in another type (to whatever extent possible).

// The double equal == operator performs an equality comparison similarly to how the triple
// equal === performs it.
// In fact, both operators consider the type of the values being compared.
// And if the comparison is between the same value type, both == and === do exactly the same thing,
// no difference whatsoever.

// If the value types being compared are different, the == differs from === in that it allows coercion
// before the comparison. In other words, they both want to compare values of like types, but == allows
// type conversions first, and once the types have been converted to be the same on both sides,
// then == does the same thing as ===. Instead of "loose equality," the == operator should be described
// as "coercive equality."

// 42 == "42"; // true
// 1 == true; // true

// Just being aware of this nature of ==, that it prefers primitive numeric comparisons, helps you avoid most
// of the troublesome corner cases, such as staying away from a gotchas like "" == 0 or 0 == false.

// There's a pretty good chance that you'll use relational comparison operators like <, > (and even <= and >=).
// Just like ==, these operators will perform as if they're "strict" if the types being relationally compared
// already match, but they'll allow coercion first (generally, to numbers) if the types differ.

// var x = "10";
// var y = "9";

// x < y; // true, watch out!

// ==========================================
// Flow control

// ------------------------------------------
// If, else if, else statements

// if (seasons[0] == "summer") {
//   console.log("It's not the right order.");
// } else if (seasons[0] == "spring") {
//   console.log("The first season is Spring, \nThat's a good start!");
// } else {
//   console.log("Still not the right order!");
// }

// ------------------------------------------
// Loops

// ----
// For

// for (var cpt = 0; cpt < seasons.length; cpt++) {
//   console.log(seasons[cpt]);
// }

// -------
// For in

// It's unreliable
// It's iterating over the object AND it's prototype.

// -------
// For of

// It's reliable
// It's iterating over the object's OWN properties only.

// A for of loop cannot work on an object directly, since an object is not iterable.

// const car = {
//   speed: 100,
//   color: "blue"
// }

// The following will throw an error: car is not iterable

// for(prop of car) {
//   console.log(prop)
// }

// Contrary to objects, arrays are iterable.

// const colors = ["red", "orange", "yellow"];
// for (var color of colors) {
//   console.log(color);
// }

// Note:
// You can use the fact that a for of loop can be run on arrays to loop over objects.

// -----------------
// Built-in methods
// Object.keys(), Object.values(), and Object.entries().

// const car2 = {
//   speed: 200,
//   color: "red"
// }
// console.log(Object.keys(car2)); // ['speed','color']

// const car3 = {
//   speed: 300,
//   color: "yellow"
// }
// console.log(Object.values(car3)); // [300, 'yellow']

// const car4 = {
//   speed: 400,
//   color: 'magenta'
// }
// console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]

// So, in conclusion:
// var clothingItem = {
//   price: 50,
//   color: 'beige',
//   material: 'cotton',
//   season: 'autumn'
// }

// for( const key of Object.keys(clothingItem) ) {
//   console.log(key, ":", clothingItem[key])
// }

// ------
// While

// var cpt = 0;
// while (cpt < seasons.length) {
//   console.log(seasons[cpt]);
//   cpt += 1;
// }

// ==========================================
// Modules

// ----------------
// Before JS modules,
// all functions defined on the window object are global.
// Then came along ServerJS (renamed CommonJS), but Require or Module.exports created for
// nodejs is not understood by the browsers.
// Then ES6 modules arrived :-)

// Before modules
// in HTML
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Regular script</title>
//   </head>
//   <body>
//     Regular, "old school", JS script.
//     <script type="text/javascript">
//       console.log("Hello from script tag");
//     </script>
//     <script>
//       console.log("The text/javascript is the default value.");
//       console.log("So we do not even have to use it with the script tag.");
//       console.log("It is implied.");
//     </script>
//   </body>
// </html>

// -----------------------
// JS scripts as modules

// Make sure to run a local http server to avoid the CORS error message
// in HTML
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>ES6 modules script</title>
//   </head>
//   <body>
//     JS scripts as modules.
//     <script type="module">
//       import { informalGreeting } from "./greetings.js";
//       informalGreeting("Jane");
//     </script>
//     <script type="module">
//       import { informalGreeting, formalGreeting } from "./greetings.js";
//       import greeting from "./greetings.js";
//       formalGreeting("John");
//       greeting();
//     </script>
//   </body>
// </html>

// in the greetings.js file
// export const informalGreeting = (name) => {
//   console.log("Hello, " + name + "!");
// };

// export const formalGreeting = (name) => {
//   console.log("Good day, " + name + "!");
// };

// export const greeting = () => {
//   console.log("Howdy!");
// };

// export default greeting;

// ==========================
// Working with the browser

// -----------------------------
// Interactive DOM manipulation

// - Open the DevTools
// - Hit 'escape' to focus on the Console

// Replaces the body contents
// document.body.innerText = "Hello World!";

// - Add an h2 element to the page
// with the id='sub-heading' and
// with the class='secondary'
// const h2 = document.createElement('h2');
// h2.innerText = 'New paragraph';
// h2.setAttribute('id', 'sub-heading');
// document.body.appendChild(h2);

// querySelector
// Find and element, here a paragraph
// document.querySelector('p');

// Find all elements, here paragraphs
// document.querySelectorAll('p');

// Find an element by 'id'
// document.getElementById('sub-heading');

// Find elements by 'class'
// document.getElementsByClassName('secondary');
// returns a collection

// -------
// Events

// User-triggered events
// Example: a button
// <button type="button" class="btn btn-lg btn-primary" onclick="clickHandler()">
//   Primary button
// </button>;

// -----------------------
// Event Listeners

// In DevTools

// First method
// target = document.querySelector('body');
// function handleClick(){
//   console.log("Body clicked");
// }
// target.addEventListener('click', handleClick);

// Second method
// In console
// function handleClick2() {
//   console.log("Heading clicked");
// }
// In the Elements tab
// Click on an element, here h1
// Edit as HTML, then add an attribute
// <h1 onclick="handleClick2()">Example Domain</h1>

// -----------
// User Input

// the built-in prompt() method

// let answer = prompt('What is your name?');
// if (typeof(answer) === 'string') {
//     var h1 = document.createElement('h1')
//     h1.innerText = answer;
//     document.body.innerText = '';
//     document.body.appendChild(h1);
// }

// the form method
// this is more robust

// var h1 = document.createElement('h1');
// h1.innerText = "Type into the input to make this text change";

// var input = document.createElement('input');
// input.setAttribute('type', 'text');

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('change', function() {
//   console.log(input.value)
// })

// input.addEventListener('change', function() {
//   h1.innerText = input.value
// })

// =====
// JSON

// Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.
// These values include:

// - primitive values: strings, numbers, booleans, null
// - complex values: objects and arrays (no functions!)
// - Objects have double-quoted strings for all keys
// - Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code
// - String properties must be surrounded in double quotes.
// - Number properties are represented using the regular JavaScript number syntax
// - Boolean properties are represented using the regular JavaScript boolean syntax
// - Null as a property is the same as in regular JavaScript

// You can use object literals and array literals, as long as you follow the above rules

// What happens if you try to stringify a data type which is not accepted in JSON syntax?
// For example, what if you try to stringify a function? The operation will silently fail.

// If you try to stringify some other data types, such as a BigInt number, say 123n, you'd get the following error:
// Uncaught TypeError: Do not know how to serialize a BigInt.

// Some examples of JSON strings:
// '{"color":"red"}'

// '{"color":"red", "nestedObject": { "color": "blue" } }'
// The above JSON object encodes two properties:
// - "color":"red"
// - "nestedObject": { "color": "blue" }

// It's also possible to have a JSON string encoding just an array:
// '["one", "two", "three"]'
// The above JSON string encodes an array holding three items, three values
// of the string data type. Obviously, just like objects, arrays can nest other simple or complex data structures.
// For example:
// '[{ "color": "blue" }, {"color: "red"}]'

// --------------------------------------
// Convert a JSON string into an object
// the JSON.parse() method

// In DevTools
// ('{ "greeting": "hello" }'); // is just a string
// const jsonStr = '{ "greeting": "hello" }';
// const jsonPlainObj = JSON.parse(jsonStr);
// console.log(jsonPlainObj.greeting); // hello
// jsonPlainObj.greeting = 'hi';

// We can also go the other way around

// --------------------------------------
// Convert an object into a JSON string
// the JSON.stringify() method

// const data = {
//   firstName: "Joe",
//   lastName: "Doe",
//   greeting: "Hello",
// };

// JSON.stringify(data);

// Note
// the JSON string will not contain functions, the methods are omitted
// it uses double quotes

// ==============
// Node and npm

// npm init
// creates a package.json file

// =========
// Testing

// example
// function concatStrings (strA, strB) {
//   return  strA + strB;
// }

// ----------------
// Adding comments
// First step is adding comments about code expectations
// It's not enough, too permissive

// -------------------
// Testing frameworks

// Tests as expectation-documenting code
// Tests are also callable, I can run tests to see if the expectations are met.

// For example, in the JEST testing framework, I can write:
// expect(concatStrings ("abc", "def)).toBe("abcdef");

// Testing JavaScript code ensures:
// - Conciseness // straightforward and to the point
// - Clarity // we know exactly what arguments we are providing
// - Repeatability // we can run it again and again

// We say that tests are 'red', if they fail or
// that they are 'green', if they pass.

// =============
// Refactoring

// The process in which I rewrite my code so it runs more efficiently
// or it's more readable, thus more easily to understand to other
// programmers on the team, thus more maintainable

// Red-green-refactor cycle
// This cycle is the basis of Test-Driven Development (TDD)

// -----------------
// Types of testing

// - End-to-end (e2e)
// - Integration
// - Unit

// ------------
// e2e testing

// Tests how a user might interact with your app
// they are the slowest and take the more time to set up and run

// Frameworks e2e
// - WebdriverJS
// - Protractor
// - Cypress

// --------------------
// Integration testing

// Tests how parts of the system interact with other parts of the system
// Tests how several parts of the app work together
// they are faster and cheaper than e2e but as cheap as Unit tests

// Frameworks for Integration testing
// - React Testing Library
// - Enzyme

// -------------
// Unit testing

// Unit testing is testing the smallest unit of source code, in isolation,
// preferably separate from the rest of the app.
// Example: functions or methods.
// Unit tests are self-contained
// This make Unit tests fast to run and easy to write.

// ----------------------------
// Three-level testing pyramid
// - at the base of the pyramid: unit tests, the highest speed and the lowest cost.
// - at the center of the pyramid: integration tests
// - at the top of the pyramid: e2e

// -------------------
// Testing Frameworks
// Jasmine, Mocha, Karma, qUnit, Jest

// -----------------------
// The Jest testing framework

// It's built by Meta
// It's JavaScript-based

// It allows to test:
// - React
// - Babel
// - TypeScript
// - Node
// - Angular
// - Vue

// It also supports:
// - code-coverage
// It's expressed in percentages, the more coverage, the better.

// - mocking
// It allows to separate the code that you are testing from the related dependencies.
// It makes sure the Unit testing is stand alone.
// In some cases mocking allows to ship features faster.
// In Jest you can use mocking without additional installations, simply by using in-built
// Jest mocking functions.
// It's also easy to test asynchronous code

// - snapshot testing
// Used for testing that there are no regressions in the DOM of the app after some changes
// to the code base are made.

// -----------
// Using Jest

// --------------------------
// Create a function addFive

// Let's say we have a file addFive.js
// function addFive(val) {
//   return val + 5;
// }
// module.exports = addFive;

// -----------------------------
// We want to test the function

// --------------------------------------
// We need to install the Jest framework

// npm init -y
// This creates a package.json file like the following:

// {
//   "name": "javascript",
//   "version": "1.0.0",
//   "description": "To install dependencies:",
//   "main": "javascript.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC"
// }

// npm install --save-dev jest
// this creates a dev dependency in package.json

// ----------------------
// We create a test file
// addFive.test.js

// const { default: TestRunner } = require("jest-runner");
// const addFive = require("./addFive");

// test("returns the number plus 5", () => {
//   expect(addFive(1)).toBe(6);
// });

// -------------
// Run the test

// npm run test

// we get a result like the following
// > javascript@1.0.0 test
// > jest

//  PASS  ./addFive.test.js
//   ✓ returns the number plus 5 (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.315 s, estimated 1 s
// Ran all test suites.

// Note
// We could use Bun instead of npm but the package.json will not be the same
// as Bun is focused on TypeScript
