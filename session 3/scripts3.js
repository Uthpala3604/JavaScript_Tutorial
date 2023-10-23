//--------------------
//----Events----------
//--------------------

/* An HTML event can be something the browser does, or something a user does.

    Here are some examples of HTML events:
    1. An HTML web page has finished loading
    2. An HTML input field was changes
    3. An HTML button was clicked

    Often, when events happen, you may want to do something. 
    JavaScript lets you execute code when events are detected.
*/

// //--Using Ineternal Events---
// //HTML allows event handler attributes, with JavaScript code, to be added to HTML lements.
// //<element event='some JavaScript'>
// function btnClick(x){
//     alert(x);
// }

// //---------------------------------

// //---Intergrated function---
// var button1 = document.getElementById('c-btn').addEventListener('click', function(){
//     alert("Button Clicked!");
// });

// //---------------------------------------

// //---Named function----
// document.getElementById('c-btn').addEventListener('mouseout', txtChange);

// function txtChange(){
//     alert("Mouse Out!");
//     document.getElementById('hdt').textContent = 'Mouse Out!';
// }

// //---------------------------------------

// //--Parameterized function-----
// document.getElementById('i-btn').addEventListener('click', function(){
//     changeListBack("Helooo");
// });
// function changeListBack(x){
//     document.getElementById('li-items').style.backgroundColor = '#ebca14';
//     document.getElementById('li-items').firstElementChild.textContent = x;
// }

// //-------------------------------

// //--Event parameter-------------
// var button2 = document.getElementById('e-btn').addEventListener('click', clickBtn);

// function clickBtn(e){
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
//     console.log(e.target.type);
//     console.log(e.type);

//     //output
//     var output = document.getElementById('output');
//     output.innerHTML = '<h4>Class name: '+e.target.classList[0]+'</h4>';

//     //clicking position
//     console.log(e.clientX);
//     console.log(e.clientY);

//     console.log(e.offsetX);
//     console.log(e.offsetY);

//     //check key press
//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);


// }

// //-----------------------------
// //----Bubbling & Capturing-----

// document.getElementById('myP1').addEventListener('click', function(){
//     alert("You clicked the white element!");
// }, false);

// document.getElementById('myDiv1').addEventListener('click', function(){
//     alert("You clicked the orange element!");
// }, false);

// //capturing
// document.getElementById('myP2').addEventListener('click', function(){
//     alert("You clicked the white element!");
// }, true);

// document.getElementById('myDiv2').addEventListener('click', function(){
//     alert("You clicked the orange element!");
// }, true);

// //----------------------------------

// //-Remove event listner----
// function myFunc(){
//     alert("Button has clicked");
// }

// //add
// document.getElementById('ev-btn').addEventListener('click', myFunc);

// //remove
// document.getElementById('rm-btn').addEventListener('click', function(){
//     document.getElementById('ev-btn').removeEventListener('click', myFunc);
//     console.log("Event has removed!");
// });

// //-----------------------------

// //--Differnt types of events for mouse-------

// var btn = document.getElementById('t-btn');
// var btn = document.getElementById('box');

// //btn.addEventListener('click', typeOfEvent1);
// //btn.addEventListener('dbclick', typeOfEvent1);
// //btn.addEventListener('mousedown', typeOfEvent1);
// //btn.addEventListener('mouseup', typeOfEvent1);

// //box.addEventListener('mouseenter', typeOfEvent1);
// //box.addEventListener('mouseleave', typeOfEvent1);
// //box.addEventListener('mouseover', typeOfEvent1);
// //box.addEventListener('mouseout', typeOfEvent1);

// box.addEventListener('mousemove', typeOfEvent1);


// function typeOfEvent1(e){
//     console.log("event type: "+e.type);

//     document.querySelector('#box h2').textContent = 'Mouse X :' +e.offsetX+' | Mouse Y- : '+e.offsetY;

//     document.body.style.backgroundColor = 'rgb(+e.offsetX+','+e.offsetY+','+e.offsetX+)';
// }

// //------------------------------

// //--Differet types of events for keyboard--

// var keyInput = document.querySelector('input[type="text"]');

// //keyInput.addEventListener('keydown', typeOfEvent2);
// //keyInput.addEventListener('keyup', typeOfEvent2);
// //keyInput.addEventListener('keypress', typeOfEvent2);
// //keyInput.addEventListener('focus', typeOfEvent2);
// //keyInput.addEventListener('blur', typeOfEvent2);
// //keyInput.addEventListener('copy', typeOfEvent2);
// //keyInput.addEventListener('cut', typeOfEvent2);
// //keyInput.addEventListener('paste', typeOfEvent2);
// keyInput.addEventListener('input', typeOfEvent2);
 
// function typeOfEvent2(e){
//     console.log("event type: "+e.type);
//     console.log('Value : '+e.target.value);
//     document.getElementById('out').textContent = e.target.value;
// }

//-------------------------------------

//----other different types of events

//--select--

var select = document.querySelector('select');

select.addEventListener('change', typeOfEvent3)

function typeOfEvent3(e){
    console.log("Event type: "+e.type);
    console.log("Value: "+e.target.value);

}

//form

var form = document.querySelector('form');

form.addEventListener('submit', typeOfEvent4);

function typeOfEvent4(e){
    e.preventDefault();
    console.log("Event type: "+e.type);

}