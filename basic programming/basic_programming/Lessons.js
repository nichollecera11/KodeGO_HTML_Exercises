//My First Javascript Exercises

// //Number
// var x = 10

// //string
// var x = '10'
// var y = 'Tang ina mo'
// var zz = 'Another tang ina mo'

// //Boolean
// var x = true;

// //Object
// var obj = {};
// var objPerson = {
//     firstName: 'Nichol',
//     age: 29,
//     address: "Zone 8 Patag Cagayan de Oro City",
//     Gender: 'Male',
// };


// // Dynamic
// let y = 12;
// y = true;

// //Concatenation
// let abc = 'hello'
// let def = 'yawa man diay ka'

// console.log (abc + '-' + def)

// Boolean sample

// let a = 5;
// let b = 6;
// let c = 5

// console.log(a === c);

//Null Sample

// let asd = null

// Symbol sample

// //Sample Type of *uses for checking
// console.log(typeof b);


// let x = "uban"
// let y = "dili uban"
// let z = "pero iya abang"

// console.log(x + ' ' + z);


//Block scope sample

// var firstNameBasis = 'Nichol';
// var lastNameBasis = 'Lecera';
// function sum(x, y) {
//     // return x + y;
//     console.log(firstNameBasis);
// }

//Constant cannot be changed
//Function Sample *uses for add to cart, admin panel ** do not go outside the curly braces para di mag error
//be careful how to use var, var is defined for all, constant and let are fixed and in block
//Let is for specific inside the block only
//Constant is fixed, need to have value

//Example of update
// let xxx = 12345;
    // xxx = 12341235;

// let a = 10;
// function printData() {
//     let x = 12;
//     let y = 13;

//     console.log(x + y);

//     if (true) {
//         let z = 100;

//         console.log(x + y + z);
//     }
//     }

// printData(); // Call


// how to declare ideal varriable should be defined with the following to know if its the right one
// var studentsArray = []

// single liner  var name: ``, age: ``, email: ``
// pwede rin na ganitong format
// var name = ``;
// var age = ``;
// var address = ``;

// Arithmetic Operation

// function sum(x, y, z)
// {
//     return x + y + z;
// }
// var sumOutput = sum(1, 2, 3);
// console.log(sumOutput);

// function difference(x, y, z)
// {
//     return x - y - z;
// }
// var differenceOutput = difference(5, 3, 1);
// console.log(differenceOutput);

// function computerAverageBy5(x, y, z)
// {
//     return ((x + y + z) / 2) * 5;
// }
// var computerAverageBy5Output = computerAverageBy5(5, 3, 1);
// console.log(computerAverageBy5Output);

//Modulo Operations
// function checkIfEven(x) {
//     return x % 2 === 0;
// }
// var checkOutput = checkIfEven(5);
// if (checkOutput) {
//     console.log('The number is even');
// }
// else {
//     console.log('The number is odd');
// }
// console.log(checkOutput);

//LOOPING increment and decrement
// addition + 1
// let count = 5;
// count++;
// console.log(count);

// //subtraction - 1
// count--;
// console.log(count);

// // Looping Example
// for (var i = 0; i < count; i++) {
//     console.log('i--', i);
// }

// // Assignment Operator
// let x = 10, y = 5;

// x += y;
// //meaning value of (x) x= x+y; the output will be the x
// console.log(x);

//Logical Operator

// // || - dapat isa sa kanila true
// // && - dapat lahat ay true
// // if(!true) = false na yan
// if(cond1 || cond2 || cond3 || cond4)
// { //para mag execute ito
// // save sa database
// } else {
// }

// let single = true;
//ternary operator this is the property method don't use if else anymore.
// let single = 'nichol'
// let ready = 'bawal';
// let nichol = single === 'bawal' ? 'pwedeng makipag date' : 'baog';
// console.log(nichol);

// sample for multiple ternary operators
// let single = 'nichol'
// let ready = 'bawal';
// let nichol = single === 'nichol' && ready === 'dakog oten' ? ' pwedeng makipag date' : 'baog';
// console.log(nichol);

// if else if sample
// if (nichol === ' [pwedeng makipag date ') {
//     console.log('gwapo');
// }
// else if (nichol === 'pwede pero dili naka kauli ug balay') {
//     console.log('friend lang kay tigbason ka ni aubrey joy');
// }
//  SWITCH SAMPLE

// let day = 'Monday'

// switch (key) {
//     case value:
//         console.log('Monday Today');
//         break;

//     default:
//         break;
    
//     case value:
//         console.log('Monday Today');
//         break;

//     default:
//         break;
    
//     }
// FOR LOOP SAMPLES
// const arrayStudents = ['Nichol','Aubrey','Tepen','Jboy']

// for (let i = 0; i < arrayStudents.length; i++) {
//     console.log('i--', arrayStudents[i]);


// // Infinite Loop
// let nichol = ''
// while (nichol !== 'buang')
// {
//     console.log('iyoton kadaghan');
// }
// for (let n = 0; n < 5; n++) {
//     console.log(n);
//     if (n === 4) {
//         nichol = 'buang';
// }
// }

// // do while example
// let a = 0;

// do { console.log('do-while', a); a++; } while (a < 5);

//Array

// let arrayData2 = [{name: "", age: 23, address: "", email: "",}]

// STACK
// How to make the button work
// <body>
//     <div>
//         <input type="text" id="inputElement">
//             <button onclick="pushElement();"> Push</button>
//             <button onclick="function popElement();">Pop</button>
// {/* <ul id = "stackElements"></ul> */}
//     </div>
//     <script type="text/javascript">

// let arrayStackValue = [];
// //How to call for the function to work

// // function pushElement() { }
//  let inputElement = document.getElementByID("inputElement").value;
// arrayStackValue.push(inputElementValue);


// function popElement() { }
// let popElement = arrayStackValue.pop();
// console.log(popElement);

// function displayElement() {
//     let stackElement = document.getElementById("stackElement");

//     forr(let i = 0; i < arrayStackValue.length; i++) {
//         let liElement = document.createElement('li');
//         liElement{ arrayStackValue[i]); }
//     }
// }
//     </script>
// </body>

// QUEUE first in first out

{/* <body>
//     <div>
//         <input type="text" id="inputElement">
//             <button onclick="enqueElement();"> Push</button>
//             <button onclick="dequeElement();">Pop</button>
// {/* <ul id = "stackElements"></ul> */}
//     </div>
//     <script type="text/javascript">

// let arrayStackValue = [];
    
// //How to call for the function to work

// // function enqueElement() { }
//  let inputElement = document.getElementByID("inputElement").value;
// // arrayStackValue.push(inputElementValue);
//         console.log(inpuytElementValue);
//         inputElement.value = '';
    
//     displayElement();


// function dequeElement() { }
// let popElement = arrayStackValue.shift();
// console.log(popElement);

// function displayElement() {
//     let stackElement = document.getElementById("stackElement");

//    stackElement.innerHTMLK = JSON.stringify(arrayStackValue);
//     }
//  */}
//     </script>
// </body>

//LINKED LIST

{/* <body>
//     <div>
//         <input type="text" id="inputElement">
//             <button onclick="addToLinkedList();">Add</button>
//             <button onclick="removeFromLinkedList();">Remove</button>
// {/* <ul id = "stackElements"></ul> */}
//     </div>

//     <script type="text/javascript">


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     addToTail(value) {
//         const newNode = newNode(value);

//         if (this.head === null) {
//             this.head = newNode;
//         }
//         else {
//             let current = this.head
//             while (current.next !== null) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//         displayElement();
//     }
//     removeFromHead() {
//         if (this.head === null) {
//             console.log('The List is empty!');
//             return;
//         }
//         const removeNode = this.head;
//         this.head = this.head.next;

//         displayElement();

//         console.log('Remove node:', removeNode);
//     }
// }
    
// const linkedList = new linkedList();

// function addToLinkedList() {
//     let inputElement = document.getElementByID("inputElement").value;
//     let inputElementValue = inputElement.Value;
//     LinkedList.addToTail(inputElementvalue);
//     inputElement.value = '',''
// }

// function removeFromLinkedList() {
//     linkedList.removeFromHead();
// }

// function displayElement() {
//     let stackElement = document.getElementById('stackElement');
//     stackElement.innerHTML - '';

//     let current = linkedList.head;

//     while (current !== null) {
//         const liElement = document.createElement(li);
//         liElement.appendChild(document.createTextNode(current.value);
//         stackElement.appendChild(liElement);
//         current = current.next;
//     }

// }
    

// let arrayStackValue = [];
    
//

// // function enqueElement() { }
//  let inputElement = document.getElementByID("inputElement").value;
// // arrayStackValue.push(inputElementValue);
//         console.log(inpuytElementValue);
//         inputElement.value = '';
    
//     displayElement();


// function dequeElement() { }
// let popElement = arrayStackValue.shift();
// console.log(popElement);

// function displayElement() {
//     let stackElement = document.getElementById("stackElement");

//    stackElement.innerHTML = JSON.stringify(arrayStackValue);
//     }
//  */}
//     </script>
// </body>

// Recursion

// function factorial(number) {
//     if (number === 0) {
//         return 1;
//     }
//     else {
//         return number * factorial(number -1);
//     }
//     }
// console.log('factorial', factorial(4));

//Search Algorithms

//Linear Search Algorithms
// const arrayData = [1, 2, 3, 4, 5, 6, 7, 8];
// const targetData = 7


// console.log(arrayData.indexOf(targetData));

// // Binary Search
// console.log(arrayData.sort(compareFunction));
// function compareFunction(a, b) {
//     return a - b;
// }


// const result = linearSearch(arrayData, targetData);
// console.log(result);
// function linearSearch(arrayData, targetData) {
//     for (let i = 0; i < arrayData.length; i++) {
//         if (arrayData[i] === targetData) return i;
//     }
//     return -1;
// }

// console.log(arrayData.indexOf(targetData));

// arrayData.find


// Sorting Algorithms
// 2 kinds of Sort, bubble Sort and Insertion Sort

// Bubble Sort Example

// const arrayData = [5, 10, 4, 2, 12, 35, 1, 100, 90]

// function bbSort() {
//     for (let i = 0; i < arrayData.length - 1; i++) {
//         for (let j = 0; j < array.length - i - 1; j++) {
//             // console.log('arrayData[j]:', arrayData[j]);
//             // console.log('arrayData[j + 1]:', arrayData[j + 1]);
//             // console.log('--------------------------------------------------------')
//             if (arrayData[j] > arrayData[j + 1]) {
//                 const temp = arrayData[j];
//                 arrayData[j] = arrayData[j + 1];
//                 arrayData[j + 1] = temp;
//             }
            
//         }
//     }
// }
// bbSort();
// console.log(arrayData);



// node js

// npm run dev

// echo "Hello World

// npm run "

// "start": "react-scripts start"
// "build": set Generate_SOURCEMAP=false && react-scripts build:
// "test": "react-scripts start"
// "eject": "react-scripts start"

// cd nodejs
// // npm install express --save-dev
// npm i bootstrap --save

// how to uninstall
// uninstall bootstrap

// server.js
// const express = require('express);
// const applic = express()
// applic.use(express.urlencoded({ extended: true }))
// applic.use(express.json())

// applic.get('/students', (request, response)) => {
//     //call function to get data from data base

//     let students = [{ name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },
//     { name: 'John', email: 'yawaka@example.com', section: 'WD61P', honor: 'yawa ka' },]


// applic.post('/students', (request, response)) => {
//     //validate

//     let name = request.body.name;
//     let message = request.body.message;
//     let address = request.body.address;
    
//     if (name == '') response.send(500);
//     if (address == '') response.send(500);
//     if (message == '') response.send(500);

// REACT JS

// className = class in html

// if you want to use javascript in return you should put it inside the curly braces

// npm install react-bootstrap --save

// import Button from 'react'



// useState and useEffect