/*
ex12: club info about a superhero together
exercise
Create two objects and put information about two superheros: superman and batman. Get familiarity with the syntax. Read and understand what's written in understanding section.

syntax
{
  // notice the opening bracket
  key: value;
} // notice the closing bracket
understanding
how objects work
the fact that objects mimic real life objects in programming and thus group properties of one object in one. Think of defining a car in programming language, what would be the properties of a car?
accessing values using keys
the values inside an object are called object's properties
notice the dot . notation used to access the properties? One thing to notice here is that console is an object on which log() is a property. And yes, functions too can be a property of object.
another fact, when functions are properties of an object, they are called methods in programming.
*/

// ############ My Solution ############

const superman = {
     name: 'Clark Kent',
     age: 35,
     powers: ['flight', 'heat vision', 'super strength', 'x-ray vision'],
     isAlive: true,
     address: {
          city: 'Metropolis',
          state: 'New York',
          country: 'USA'
     },
     sayHi: function (yourName) {
          console.log('Hi ' + yourName + ', I am ' + this.name + '.' + ' I am ' + this.age + ' years old.' + ' I live in ' + this.address.city + ', ' + this.address.state + ', ' + this.address.country + '.' + ' I have ' + this.powers.length + ' powers. They are ' + this.powers[0] + ', ' + this.powers[1] + ', ' + this.powers[2] + ', ' + this.powers[3] + '.' + ' I am alive: ' + this.isAlive + '.' + ' Nice to meet you.');
     }
};

const batman = {
     name: 'Bruce Wayne',
     age: 40,
     powers: ['intelligence', 'wealth', 'fighting skills', 'detective skills'],
     isAlive: true,
     address: {
          city: 'Gotham City',
          state: 'New York',
          country: 'USA'
     },
     sayHi: function (yourName) {
          console.log('Hi ' + yourName + ', I am ' + this.name + '.' + ' I am ' + this.age + ' years old.' + ' I live in ' + this.address.city + ', ' + this.address.state + ', ' + this.address.country + '.' + ' I have ' + this.powers.length + ' powers. They are ' + this.powers[0] + ', ' + this.powers[1] + ', ' + this.powers[2] + ', ' + this.powers[3] + '.' + ' I am alive: ' + this.isAlive + '.' + ' Nice to meet you.');
     }
};

console.log(superman);
console.log(batman);

console.log(superman.sayHi('Sunny'));
console.log(batman.sayHi('Karan'));