// const React = require('react');

var names = ['Anja', 'Sascha'];
names.forEach(function (name) {
  console.log('forEach', name);
});

// am I using an anonymous function?
names.forEach((name) => {
  console.log('arrowFunc', name);
});

// one line functions become even shorter
names.forEach((name) => console.log(name));

// simple expressions always get returned!
var returnMe = (name) => name + '!';
console.log(returnMe('Sascha'));

// arrow function take on their parents 'this' binding (convert to normal function to see 'undefined')
var person = {
  name: 'Sascha',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

person.greet();

// Challenge Area
function add (a,b) {
  return a + b;
}

// addStatement curly braces
var addStatement = (a,b) => {
  return a + b;
}
console.log(addStatement(4,7));

// addExpression expression syntax
var addExpression = (a,b) => a + b;
console.log(addExpression(5,123));

// console.log(add(1,3));
// console.log(add(9,0));
