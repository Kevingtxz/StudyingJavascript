// Javascript Study
/*
console.log('arroz');

// Variables

let a = 'ElementById';
document.getElementById('h1').innerHTML = a;

// prompt and if
/*
a = prompt('What is your age?');

if (a < 23) {
  document.getElementById('h1').innerHTML = 'You are younger than me';
} else if (a > 24) {
  document.getElementById('h1').innerHTML = 'You are older than me';
} else {
  document.getElementById('h1').innerHTML = 'UOU, same age';
}
* /

// Numbers

let g = 10;

// Increment and decrement g
g++;
console.log(g / 2);
g--;
console.log((g += 2));

// Functions

function fun() {
  console.log('function');
}

// Call
fun();

/* funcition that takes in a name and return a text with the name * /

function greeting() {
  let name = prompt('What is your name?');
  let result = 'Hello' + name;
  console.log(result);
}

// greeting();

// Arg in Functions, 2 numbers

function sum(n1, n2) {
  var result = n1 + n2;
  console.log(n1 + n2);
}

sum(10, 41);


* /
// DOM study

// making element
let newElement = document.createElement('input');

// details of element
// console.dir(newElement);

// Add element in body
document.body.appendChild(newElement);

// 
* /

// setAttribute
document.getElementById('myInput').setAttribute('value', 'water bottle');
* /

// textContent
const h2Title = document.getElementById('title');

h2Title.textContent = 'I love you';

alert(h2Title.textContent);

// innerHTML

h2Title.innerHTML = '<em>em element</em>';

alert(h2Title.textContent);
*/

// parent element
const myList = document.getElementById('myList');

// New List Item (<li>)

let newListItem = document.createElement('li');
newListItem.textContent = 'Other Child';

const childList = ['3 child', '4 child', '5 child'];

myList.appendChild(newListItem);

for (let child of childList) {
  let newListItem = document.createElement('li');
  newListItem.textContent = child;
  myList.appendChild(newListItem);
}
