// //-----------------------
// //-----Winning team------
// //-----------------------

// var score1, score2, score3, averageSri, averageEng;

// //Sri Lanka average
// score1 = parseInt(prompt("First match score of team Sri Lanka: "));
// score2 = parseInt(prompt("Second match score of team Sri Lanka: "));
// score3 = parseInt(prompt("Third match score of team Sri Lanka: "));

// averageSri = (score1+score2+score3)/3;

// console.log(averageSri);

// console.log(typeof(score1));

// //England average
// score1 = parseInt(prompt("First match score of team England: "));
// score2 = parseInt(prompt("Second match score of team England: "));
// score3 = parseInt(prompt("Third match score of team England: "));

// averageEng = (score1+score2+score3)/3;
// console.log(averageEng);

// //find the winner
// if(averageSri > averageEng){
//     alert("Winner is team Sri Lanka | Average score: "+averageSri);
//     console.log("Winner is team Sri Lanka | Average score: "+averageSri);
// }else if(averageSri < averageEng){
//     alert("Winner is team England | Average score: "+averageEng);
//     console.log("Winner is team England | Average score: "+averageEng);
// }else{
//     alert("Match is draw");
//     console.log("Match is draw");
// }

// //-----------------------------------
// //------Introduction to functions----
// //-----------------------------------

// //--define function--

// //without return---
// function addNumbers(num1, num2){
//     var ans = num1+num2;
//     console.log("Addition: "+ans);
// }

// //with return
// function subNumbers(num1, num2){
//     return num1-num2;
// }

// //calling functions
// addNumbers(20, 32.5);

// var sub = subNumbers(30, 12);
// console.log("Substraction: "+sub);

// //--------------------------
// //define
// function calculateAge(birthYear){
//     return 2023 - birthYear;
// }

// //calling
// console.log("Kasun is: "+calculateAge(1997)+ " years old");
// console.log("Ama is: "+calculateAge(1994)+ " years old");

// //define

// function retiringYear(firstName, birthYear){
//     //calling
    
//     var age = calculateAge(birthYear);
//     var retire = 60 -age;
//     console.log(firstName+ " retires in "+retire+ " years, in "+(birthYear+age+retire));
// } 

// //calling
// retiringYear("Samali", 1997);


// //------------------------------
// //--------functional expressions---
// //----------n---------o---------i--

// //--functison desclaration--
// // function profession(job, firstName){}

// //--Function expression----
// var profession = function(job, firstName){
//     switch(job){
//         case 'doctor':
//             return firstName+ ' is treating patients.';
//         case 'teacher':
//             return firstName+ ' is teaching students.';
//         case 'engineer':
//             return firstName+ ' is working with buildings.';
//         default:
//             return firstName+ ' is doing something.';
//     }
// }

// //calling
// console.log(profession('doctor', 'Kasun'));
// console.log(profession('engineer', 'Sachini'));
// console.log(profession('professor', 'Kamal'));



// //------------------------
// //----Arrays------------
// //----------------------

// //ways to define an array
// var students = ['Ruwan', 'Nimal', 'Piyal', 'Kasuni'];
// var marks = new Array(60, 55, 66, 44, 78);

// //ptrit array
// console.log(students);
// console.log(students.length);
// console.log(students[3]+ ' got '+marks[3]+ ' marks for Maths.');

// //array
// students[3]='Sanduni';
// students[5]='Anne';
// students[students.length] = 'Jane';
// console.log(students);

// //different data types in an array
// var std1 = ['Kamal', 'Perera', 22, 'Agri', 'Panadura', true];
// console.log(std1);
// console.log(typeof(std1[3]));

// //add elements
// std1.push('green');
// console.log(std1);

// std1.unshift('Mr.');
// console.log(std1);

// //remove elements
// std1.pop();
// console.log(std1);
// std1.shift();
// console.log(std1);

// //get index of an element
// console.log(std1.indexOf(22));

// var isAgriStudent = std1.indexOf('Agri')=== -1 ? std1[0]+' is not a Agri student' : std1[0]+' is a Agri student';

// console.log(isAgriStudent);


//----------------------------
//-----Tip calculator--------
//--------------------------

// var tips = new Array();
// var amount = new Array();

//function
// function tipCalculator(bill){
//     var tip;
//     if(bill < 1000){
//         //calculate tip
//         tip = bill*(20/100);
//     }else if(bill >= 1000 && bill < 1500){
//          //calculate tip
//          tip = bill*(15/100);
//     }else{
//         //calculate tip
//         tip = bill*(10/100); 
//     }

//     //store in arrays
//     tips.push(tip);
//     amount.push(bill+tip);
// }

// //calling
// console.log('1-Tip: '+tipCalculator(1230));
// console.log('2-Tip: '+tipCalculator(982));
// console.log('3-Tip: '+tipCalculator(1640));

// //Arrays
// console.log(tips);
// console.log(amount);

// function tipCalculator(bill) {
//     var tip;
//     if (bill < 1000) {
//         // calculate tip
//         tip = bill * (20 / 100);
//     } else if (bill >= 1000 && bill < 1500) {
//         // calculate tip
//         tip = bill * (15 / 100);
//     } else {
//         // calculate tip
//         tip = bill * (10 / 100);
//     }

//     // store in arrays
//     tips.push(tip);
//     amount.push(bill + tip);

//     // return the tip value
//     return tip;
// }

// // calling
// console.log('1-Tip: ' + tipCalculator(1230));
// console.log('2-Tip: ' + tipCalculator(982));
// console.log('3-Tip: ' + tipCalculator(1640));

// // Arrays
// console.log(tips);

// //----------------------
// //-----------objects----
// //----------------------

// //object literals
// //comma seperated list of name value pairs wrapped in curly braces.
// var nimal = {
//     firstName: 'Nimal',
//     lastName: 'Perera',
//     age: 24,
//     isMarried: false,
//     job: 'Developer',
//     subjects: ['java Programming', 'Web Development', 'Graphic Design', 'Database Management'],
//     degree: {
//         name: 'Software Engineer',
//         duration: '4 years',
//         credits: 120
//     },
//     projects: [
//         {
//             name: 'Ecommerce app',
//             technology: 'Flutter',
//             version: 1.1
//         },
//         {
//             name: 'Music player',
//             technology: 'Java',
//             version: 1.2
//         },
//         {
//             name: 'POS',
//             technology: 'C#',
//             version: 2.0
//         }
//     ],
//     yearofBirth: function(year){
//         return year-this.age;
//     }

// }

// //get values
// console.log(nimal);
// console.log(nimal.firstName);
// console.log(nimal['lastName']);
// var x = 'age';
// console.log(nimal[x]); 
// console.log(nimal.subjects);
// console.log(nimal.subjects[3]);
// console.log(nimal['subjects'][2]);
// console.log(nimal.degree.duration);
// console.log(nimal['degree'].credits);
// console.log(nimal.projects[1].technology);
// console.log('Year of birth: '+nimal.yearofBirth(2023));

// //modify values
// nimal.job = 'Engineer';
// nimal.isMarried = true;
// console.log(nimal);

// //--new object--
// var kasun=new Object();

// //add properties
// kasun.firstNamee = 'Kasun';
// kasun.lastName = 'Silva';
// kasun['age'] = '30';

// console.log(kasun);


//-------------------------------------
//------------BMI with objects---------
//-------------------------------------

//BMI = mass / height ^ 2

//----------my way---------------------

// var kasun = {
//     fullName: prompt("Enter full name of Kasun: "),
//     mass: prompt("Enter mass of kasun: "),
//     height: prompt("Enter height of Kasun: "),

//     kasunBmi: function(mass, height){
//         return this. mass / (this.height**2)
//     }
// }

// var chamal = {
//     fullName: prompt("Enter full name of Chamal: "),
//     mass: prompt("Enter mass of chamal: "),
//     height: prompt("Enter height of chamal: "),
//     chamalBmi: function(mass, height){
//         return this. mass / (this.height**2)
//     }
// }

// // console.log(kasun);
// // console.log(chamal);

// if(kasun.kasunBmi() > chamal.chamalBmi()){
//     console.log(" "+kasun.fullName+" have the heighest BMI");
// }else if(chamal.chamalBmi() > kasun.kasunBmi()){
//     console.log(" "+chamal.fullName+" have the heighest BMI");
// }else{
//     console.log("Both "+kasun.fullName+" and "+chamal.fullName+" have the same BMI values.")
// }


// //---------------triplebee way----------------------

// //declare objects
// var kasun = new Object();
// var chamal = new Object();

// //add properties to kasun
// kasun.fullName = prompt("Enter kasun's full name: ");
// kasun.mass = prompt("Enter kasun's mass: ");
// kasun.height = prompt("Enter kasun's height: ");

// //add properties to chamal
// chamal.fullName = prompt("Enter chamal's full name: ");
// chamal.mass = prompt("Enter chamal's mass: ");
// chamal.height = prompt("Enter chamal's height: ");

// //add bmi() method for both
// kasun.bmi = chamal.bmi = function(){
//     this.bmiVal = this.mass / (this.height**2);
//     return this.bmiVal;
// }

// console.log(kasun);
// console.log(chamal);

// //find the heightst bmi
// if(kasun.bmi()>chamal.bmi()){
//     alert(kasun.fullName+"  has the heighest bmi "+kasun.bmiVal);
// }else if(kasun.bmi()<chamal.bmi()){
//     alert(chamal.fullName+"  has the heighest bmi "+chamal.bmiVal);
// }else{
//     alert("Both are equal");
// }    

// //------------------------------------------
// //----------loops---------------------------
// //------------------------------------------

// //----for loop-----
// // for(var i=0; i<10; i++){
// //     console.log(i);
// // }

// // for(var i=10; i>0; i--){
// //     console.log(i);
// // }

// //iterate an array
// var students = ['Nimal', 'Kumara', 'Dasun', 'Sachini', 'John'];
// for(var i=0; i<students.length; i++){
//     console.log(students[i]);
// }   

// //--For in loop--------
// var person = {fname: 'Chamara', lname:'Silva', age: 25};
// var i;
// for(i in person){
//     console.log(person[i]);
// }

// //--For of loop----
// var fullName = "Chamra Perera";
// var j;
// for(j of fullName){
//     console.log(j);
// }

// //--while loop---
// var marks = [33,55,66,88,22];
// var k = 0;
// while(k<marks.length){
//     console.log(marks[k]);
//     k++;
// }

// //--do while loop---
// var l = 10;
// do{
//     console.log(l);
//     l--;
// }while(l >= 1);

// //--continue and break -----
// var data = ['Saman', 'Galle', 1996, 'Maths', true, 'Chocolate'];

// //continue
// for(var i=0; i<data.length; i++){
//     if(typeof(data[i]) !== 'string') continue;
//     console.log(data[i]);
// }

// //break
// for(var i=0; i<=data.length; i++){
//     if(typeof(data[i]) !== 'string') break;
//     console.log(data[i]);
// }  

// //--------------------------------------
// //----------Error handling--------------
// //--------------------------------------

// //Try catch
// // try - Lets you test a block of code for errors
// // catch - Lets you handle the error
// // throw - Lets you create custom errors
// // finally - Lets you execute code, after try and catch, regardless of the result

// // function to find the largest number
// function findLargest(a,b,c){
//     try{
//         if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number'){
//             throw "Error: Enter only numbers!";
//         }
//         else if(a == b || a == c || b ==c){
//             throw "Error: Enter different numbers!";
//         }else{
//             if(a > b && b > c){
//                 console.log("a is the largest number!");
//             }else if(b > a && b > c){
//                 console.log("b is the largest number!");
//             }else if(c > a && c > b){
//                 console.log("c is the largest number!");
//             }else{
//                 console.log("Invalid inputs!");
//             }
//         }
//     }catch(err){
//         console.log(err);
//     }finally{
//         console.log("Input values are "+a+", "+b+" and "+c);
//     }
// }

// //calling
// findLargest(3,2,1);


// //--------------------------
// //-----JavaScript Scope-----
// //--------------------------

// /*
//     Scope determine the accessibility (visibility) of variables. In JS there are 2 types of scope:
//     1. Local
//     2. Global
// */

// //Local variables
// function addNum(){
//     var a = 10;
//     var b = 20;
//     console.log(a+b);
// }
// //calling
// addNum();
// // console.log(a);

// //global variable
// var subject = "Maths";
// function mySub(){
//     console.log("My favourite subject is: "+subject);
//     subject = "Science";
// }
// //calling
// mySub();
// mySub();
// console.log(subject);


//--------------------------------------------
//---Tip Calculator with objects and loops----
//--------------------------------------------

// Bills: 1230, 982, 1640, 1460, 944
// Tips: 20% -- less than 1000
//       15% -- between 1000 - 1500
//       10% -- more than 1500

//----my way----------

//1. create an object with an array for bill values
var billPay = new Object();
billPay.array= new array[1230, 982, 1640, 1460, 944]
console.log(bill);

//2. Adding a method to calculate tips
billPay.calTips = function(){
    for(var i=1; i<=array.length; i++){
        var tip;
        if(array[i]<=1000){
            tip = 20/100;
        }else if(array[i]>=1000 && array[i]<1500){
            tip = 15/100;
        }else if(array[i]>=1500){
            tip = 10/100;
        }
    }
    console.log(tip);
}

//---triple bee way----------

// var billPay = {
//     bill: [],
//     tip: [],
//     final: [],
//     calTip: function(){
//         for(var i=0; i<this.bill.length; i++){
//             var tp;
//             if(this.bill[i] < 1000){
//                 tp = 20/100;
//             }else  if(this.bill[i] < 1500 && this.bill[i] >=1000){
//                 tp = 15/100;
//             }else{
//                 tp = 10/100;
//             }

//             //calculation and add tip to the array
//             this.tip[i] = this.bill[i] * tp;

//             //add fial amount to the array
//             this.final[i] = this.bill[i] + this.tip[i];
//         }
//     }
// }
// //get inputs
// for(var i=0; i<5; i++){
//     billPay.bill[i] = parseInt(prompt("Enter bill amount: "));

// }

// //calling
// billPay.calTip();
// console.log(billPay);