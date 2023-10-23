// //-------------------------------
// //--------Variables---------------
// //-------------------------------

// //Create variables
// var firstName = "Uthpala";
// var lastName = "Pathirana";
// var age = 26;
// var isOk = true;
// var job, height;

// //print only variable
// console.log(firstName);
// //print the variable with a string
// console.log("My name is " +firstName+ " " +lastName);
// //type coercion
// console.log("My age is "+age);
// console.log("It is "+isOk);
// console.log("I am a "+job);

// //get variable type
// console.log(typeof(lastName));
// console.log(typeof(age));
// console.log(typeof(isOk));
// console.log(typeof(job));

// //define
// job = 'Doctor';
// //variable mutation
// lastName = 'Fernando';
// console.log('I am '+lastName+'. I am a '+job);

// //display an alert
// alert('My name is '+lastName+'. I am '+age+' years old. and am I ok? '+isOk+'.');

// //get user input
// height = prompt("What is your height?");
// alert("My height is "+height+' feet.');
// //console.log("My height is "+height+' feet.');

//---------------------------------------------
//-------------Arithmetic operators------------
//---------------------------------------------

//----single operators------
// var myAge, yourAge, year, result;
// myAge =26;
// yourAge =23;
// year = 2023;

// //substraction
// result = year - myAge;
// console.log('I was born in '+result);

// //addition
// result = year + 10;
// console.log('After 10 years, it will be '+result);

// //multiplication
// result = myAge + yourAge;
// console.log('Product of our ages '+result);

// //division
// console.log('Division of our ages '+(myAge/yourAge));

// //modulus
// console.log("Modulus of our ages "+(myAge%yourAge));

// //exponentitation
// console.log('Exponent of my age '+(myAge**2 )); //myAge*myAge

// //increment
// console.log(myAge++);
// console.log('Post increment of my age '+myAge);

// console.log(++myAge);
// console.log('Pre increment of my age '+myAge);

// //decrement
// console.log(myAge--);
// console.log('Post decrement of my age '+myAge);

// console.log(--myAge);
// console.log('Pre decrement of my age '+myAge);

// //operator precedence
// var cal = (20+30)/10+4.5-2*4**2; 
// console.log(cal);

// //multiple operators
// var ans1, ans2 =(((30+4-29)*2)/8)**4;
// ans1 = ans2;
// console.log(ans1);


//-------------------------------
//------Assignment operators-----
//------------------------------

//Equal
// var myName = "Ama";
// console.log(myName);

// //Addition with equal
// var age = 24;
// age += 10; //age=age+10
// console.log(age);

// //substraction with equal
// age -= 10;
// console.log(age);

// //multiplication with equal
// age *= 10;
// console.log(age);

// //division with equal
// age /=4;
// console.log(age);

// //modulus with equal
// age %=13;
// console.log(age);

// //exponentitation with equal
// age **=2;
// console.log(age);


//-----------------------------------------------
//---------BMI Comparison------------------------
//-----------------------------------------------

// //BMI = weight/height**2 ------------> mass is kg and height in meter
// //var hKasun, hChamal, wKasun, wChamal, isKasun;

// //BMI = weight/height**2;

// //Kasun's BMI
// wKasun = prompt("Kasun's weight: ");
// hKasun = prompt("Kasun's height: ");
// BMIKasun = wKasun/hKasun**2;
// console.log("BMI of Kasun: "+BMIKasun);

// //Chamal's BMI
// wChamal = prompt("Chamal's weight: ");
// hChamal = prompt("Chamal's height: ");
// BMIChamal = wChamal/hChamal**2;
// console.log("BMI of Chamal: "+BMIChamal);

// //boolean
// isKasun =(BMIKasun > BMIChamal);
// alert(isKasun);



//----------------------------------
//--If-else------------------------
//---------------------------------

// var a = 10;
// var b = 20;
// if(a>b){
//     console.log ("a is greater than b");
// }else if(a<b){
//     console.log ("a is less than to b");
// }else{
//     console.log ("a is less than or equal to b");
// }

// var a = 20;
// var b = '20';
// var c = 5;
// var d = 15;

// //Equal to
// if(a===b){
//     //equal value and equal type
//     if(a===b){
//         console.log('Both value and type of a is equal to b');
//     }
//     //not equal value or not equal type
//     else if(a!==b){
//         console.log('Only value or type of a is equal to b');
//     }
// }
// //greater than or equal
// else if(a==10){
//     if(a > 10){
//         console.log('a is greater than 10');
//     }
//     //equal to
//     else if(a==10){
//         console.log('a is greater than 10');
//     }
// }
// //not equal
// else if(a==c){
//     //Less than
//     if(a<c){
//         console.log('a is less than c');
//     }
//     else{
//         console.log('a is greater than a');
//     }
// }
// else{
//     //less than or equal
//     if(c<=d){
//         // if(c==5){
//         //     console.log('c is less than or equal to 5');
//         // }
//         // else{
//         //     console.log('c is greater than to 5');
//         // }

//         //Ternary operator
//         c<=5 ? console.log('c is less than or equal to 5'):
//         console.log('c is greater than to 5');
//     }
// }

//-----------------------------
//-----Logical operators-------
//-----------------------------

// var a = 20;
// var b = 10;
// var c = 5;

// //and
// if(a==10 && a == b){
//     console.log("It is good");
// }

// //or
// else if(a<10 || c>b){
//     console.log("It is ok");
// }

// //not
// else if(a!=c){
//     console.log("It is normal!");
// }

// else{
//     console.log("It is bad!");
// }

//---------------------------------
//--------switch-case--------------
//---------------------------------


// var empName = "Kasun";
// var jobRole = "Doctor";

// switch(jobRole.toLocaleLowerCase()){
//     case 'teacher': console.log(empName+ ' is a Teacher');
//     break;
//     case 'doctor':
//     case 'professor':    
//                 console.log(empName+ ' is a Doctor');
//     break;
//     case 'engineer': console.log(empName+ ' is a Engineer');
//     break;
//     default: console.log(empName+ ' does something else');
//     break;
// }

//...............................

// var age = 20;

// switch(true){
//     case age < 20: console.log(empName+ ' is under age');
//     break;
//     case age >= 20 && age < 30: console.log(empName+ ' is in perfect age');
//     break;
//     case age >=30 && age < 50: console.log(empName+ ' is mature');
//     break;
//     default: console.log(empName+ ' is too old');
// }


//-------------------------------------
//-------Bitwise-operators-------------
//-------------------------------------

// //and
// console.log(5 & 1);

// //or
// console.log(5 | 1);

// //not
// // 5 -  0000000000000000000000000000 0101
// // ~5 - 1111111111111111111111111111 1010
// // (2 ^ 32) - 1 - 5 
// console.log(~5)

// //xor
// console.log(5 ^ 1);

// //zero fill left shift

// console.log(5 << 1);

// //signed right shift
// console.log(5>>1);

// //zero fill right shift
// console.log(5 >>> 1);

// //convert decimal to binary
// console.log((10).toString(2));

// //convert binary to decimal
// console.log((0b1010).toString(10));
// console.log(parseInt("1010",2));























































































































































































































































































































































































































































































































































































































































