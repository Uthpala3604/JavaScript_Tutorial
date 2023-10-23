//-------------------------------------------
//-----Select & update DOM Elements----------
//-------------------------------------------

//---Examine the document object----------
// console.dir(document);

// //--Get proporties--
// console.log(document.URL);
// console.log(document.charset);
// console.log(document.lastModified);
// console.log(document.title);
// console.log(document.doctype);

// console.log(document.head);
// console.log(document.body);

// console.log(document.all);
// console.log(document.all[11]);

// console.log(document.forms[0][1]);
// console.log(document.links);
// console.log(document.images);

// //--change values--
// document.title = "Document Object Model"
// console.log(document.title);

// document.all[11].textContent = 'shopping Item List';
// console.log(document.all[11]);

// //---select elements using ID---
// console.log(document.getElementById('frmt'));
// var formTitle = document.getElementById('frmt');
// console.log(formTitle);


// // --texContent, innerText & innerHTML--
// formTitle.textContent = 'Add Shopping Items';
// formTitle.innerText = 'Shopping Items';
// formTitle.innerHTML = '<i>Hello </i>Add Items'

// console.log(formTitle.textContent);
// console.log(formTitle.innerText);
// console.log(formTitle.innerHTML);


// //--Styling----
// var navigation = document.getElementById('navbar');
// navigation.style.backgroundColor = "#090209";
// navigation.style.color= "#fff";

// //----------------------------

// //--Select elements using class name-----
// var items = document.getElementsByClassName('items');
// console.log(items);
// console.log(items[0]);
// items[2].textContent = 'Hand Bag';
// console.log(items[2]);

// //--Styling--
// items[2].style.fontFamily = 'serif';
// items[2].style.backgroundColor= "#ebca14";

// //--Change back color of all list items--
// for(var i of items){
//     i.style.backgroundColor= "#a7520c";
// }

//------------------------------

// //--select elements using Tag name--
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[0]);
// li[2].textContent = 'Book';
// console.log(li[2]);

// //--styling--
// li[2].style.color = '#fff';
// li[2].style.backgroundColor = '#ebca14';

// //--change back color of all the list items--
// for(var i of li){
//     li[2].style.backgroundColor = '#ebca14';
// }

//--------------------------------------


// //--select elements using query selector--
// //The QuerySelector() method returns the first element that matches a specified CSS selector(s) in the document.

// //Id
// var hd = document.querySelector('#navbar');
// hd.style.border = 'solid 3px #000';


// //--tag--
// var input = document.querySelector('input');
// input.style.backgroundColor = "#ebac14";
// input.value = "Paint Bucket";

// //--class--
// var item = document.querySelector('.items');
// item.style.backgroundColor = "#ebac14";

// //--mix selectors--
// var ite =  document.querySelector('div .frm #frmt');
// ite.style.color = '#ebac14';

//-----------------------------

//--select elements using Query selector all---
//The querySelector() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object. 

//--ID--
var hd =document.querySelectorAll('#hdt');
console.log(hd);

//--tag--
var dv=document.querySelectorAll('div');
console.log(dv);

//--class--
var cl = document.querySelectorAll('.items');
console.log(cl);

//--mix selector--
var mx = document.querySelectorAll('div .list li');
console.log(mx);

//--pseudo classes--
//Grab all the add list items

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
console.log(odd);
console.log(even);

for(var i of odd){
    i.style.backgroundColor = '#ebca14';
}

for(var i of even){
    i.style.backgroundColor = '#1422eb';
}