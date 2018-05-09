//OBJECT/FUNCTION METHODS
//When storing a function as a property in a method,
//we must include the () when calling it... example,
// person.getFullName();

//OBJECT LITERAL notation
var person = {
  firstName: 'Tony',
  lastName: 'Carbetta',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

//THIS KEYWORD
//this depends on the context/Scope in which it's being used.
// this Inside a method refers to the name of the METHOD
//this outside the method refers to the document WINDOW

//BRACKET SYNTAX
//the bracket syntax is the same as DOT notation; example
//person.firstname; is the same as person['firstName'];

//FOR IN LOOPS
//used for looping through the PROPS(properties) of methods.

// example...
// for (var variable in object) {
//   if (object.hasOwnProperty(variable)) {
//
//   }
// }

//MUST USE bracket notation instead of dot notation

for (var prop in person) {
  if (typeof(person[prop]) == 'function') {
    console.log(person[prop]());
    //this log INVOKES () ... the function, notice the parentheses!
  }
    else {
  console.log(person[prop]);
  }
}

//TYPE OF
typeof(person.getFullName);
//returns --- "function"
//remember that typeOf an array returns 'object'

// -----------------------------------------------------------
//OBJECT CONSTRUCTOR notation/function
//Must start with a capital letter
// EXAMPLE #1:

// function Person() {
//   console.log(this);
//   this.firstName = 'Kingston';
//   this.lastName = 'Thouchalanh';
// }
//
// var kingston = new Person()

//new indicates to this function that it needs to create &return an object
//new is telling the browser that this is a CONSTRUCTOR function and together the two of these create an object on the fly...

//WHAT the CONSTRUCTOR function is doing is creating a new blank method, than inside that method(this) we are creating two properties,
// one property called firstName and one called lastName
// we are giving a value to each propery,
//one called 'Kingston' & one called 'Thouchalanh'


//WHY would you ever need to do this?
//ANSWER: to create objects with the same properies quicker
//EXAMPLE #1 with working arguments
// function Person(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.getFullName = function () {
//     return `${this.firstName } ${this.lastName}`;
//   }
// }
//Here we are making the new objects quickly
// var marilou = new Person('Marilou', 'Carbetta');
// var kingston = new Person('Kingston', 'Thouchalanh');

//check in console
//kingston.firstName
//kingston.lastName
//kingston.getFullName()

//Example #2
// function Car (nameOfCar, color, miles) {
//   this.nameOfCar = nameOfCar;
//   this.color = color;
//   this.getCarDetails = function () {
//     return `name: ${this.nameOfCar}, color: ${this.color}`;
//   }
// }
//
// let chevy = new Car('Camaro', 'orange');
// let toyota = new Car('Camry', 'red',);


//IMMEDIATLEY INVOKED FUNCTIONS (iife)
//wrap the function in parentheses, than follow it with parentheses.. than give it arguments

//When reading code that looks complicated, look for a
//parentheses before the word function to tell if it's an iife

//Example #1 WITH IMMEDIATLEY INVOKED FUNCTION (iife)
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = (function (x,y) {
    return x + " " + y;})
    (this.firstName, this.lastName)
}

var marilou = new Person('Marilou', 'Carbetta');
var kingston = new Person('Kingston', 'Thouchalanh');
//They don't have to all be stored in varialbes, instead...
//We can make an array of these.
var people = [
  new Person('Zion', 'Dizon'),
  new Person('Dominique', 'Dizon'),
  new Person('Cora', 'Blanco')
]

//Example #2 WITH IMMEDIATLEY INVOKED FUNCTION (iife) & template literals
function Car (nameOfCar, color) {
  this.nameOfCar = nameOfCar;
  this.color = color;
  //  IIFE
  this.carDetails = (function (x,y) {
    return `name: ${x}, color: ${y}`;})
    (this.nameOfCar,this.color);
}

let chevy = new Car('Camaro', 'Orange');
let toyota = new Car('Camry', 'Red',);

var cars = [
  new Car('Chevy Camaro','Orange'),
  new Car('Toyota Camry','Red'),
  new Car('Honda Civic','Grey'),
  new Car ('Ford Mustang','Yellow')];























// -----------------------------------------------------------
//Remember that an array starts at the ZERO index,
//But the .length property starts at ONE


var schoolsArray = [{
    name: 'Codify',
    students: 70,
    location: 'San Francisco',
    tuition: 8000
  },
  {
    name: 'LA Film School',
    students: 200,
    location: 'Los Angeles',
    tuition: 20000
  },
  {
    name: 'Dubspot Electronic Music School',
    students: 331,
    location: 'Online',
    tuition: 4000
  },
  {
    name: 'Stanford',
    students: 1100,
    location: 'Santa Clara',
    tuition: 45000
  }

];

var schoolsMethod = {
  Codify: {
    name: 'Codify',
    students: 70,
    location: 'San Francisco',
    tuition: 8000
  },
  LAFilmSchool: {
    name: 'LA Film School',
    students: 200,
    location: 'Los Angeles',
    tuition: 20000
  },
  Dubspot: {
    name: 'Dubspot Electronic Music School',
    students: 331,
    location: 'Online',
    tuition: 4000
  },
  Stanford: {
    name: 'Stanford',
    students: 1100,
    location: 'Santa Clara',
    tuition: 45000
  }
};
