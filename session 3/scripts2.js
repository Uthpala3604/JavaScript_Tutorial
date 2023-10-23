// //---------------------------
// //-Traversing the DOM--------
// //----------------------------

// var itemList = document.querySelector('#li-items');

// //--parent Node--
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#afafaf';
// console.log(itemList.parentNode.parentNode);

// //--Parent element--
// //Most of the time similar to parentNode
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#6f6f6f';
// console.log(itemList.parentElement.parentElement);

// //--------------------------------------

// //---Child nodes---------------------
// console.log(itemList.childNodes);

// //---children---
// console.log(itemList.children);
// console.log(itemList.children[2].textContent);
// itemList.children[2].style.backgroundColor = "#ebca14";

// //-------------------------------

// //----First Child----------------
// //work likechildNodes
// console.log(itemList.firstChild);

// //--first element child---------
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = '#ebca14';

// //--last child---------
// //work like childnodes
// console.log(itemList.lastChild);

// //---last element child-------
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = '#ebca14';

// //---------------------------

// //---next sibling---------
// //work like childnodes
// console.log(itemList.nextSibling);

// //--next element sibling---
// console.log(itemList.nextElementSibling);
// itemList.nextElementSibling.style.backgroundColor = '#ebca14';

// //---previous sibling----
// //work like childnodes
// console.log(itemList.previousSibling);

// //--previous element sibling-------
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = '#ebca14';

//------------------------

//--create an element---

//--create an input----
var input = document.createElement('input');

//add a class
input.className = 'test';

//add an ID
input.id = 'last';

//add an attribute
input.setAttribute('type', 'text');
console.log(input);

//--create a div---
var newDiv = document.createElement('div');

//create text node
var newText = document.createTextNode("How are you!");

//add text to div
newDiv.appendChild(newText);
console.log(newDiv);

//--Insert creater elements to the document--
var form = document.querySelector('.frm form');
var button = document.querySelector('.frm form button');

input.style.backgroundColor = '#ebca14';

form.insertBefore(input, button); 