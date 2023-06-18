// let userName = prompt("Hello User, please tell me your name");
// console.log(userName);
// alert("Welcome to my page " + userName);

// document.addEventListener('DOMContentLoaded', function() {
//   var nameButton = document.getElementById('nameButton');
//   nameButton.addEventListener('click', function() {
//     var userInput = prompt('Enter your name:');

//     while (!userInput) {
//       alert('Please enter a valid name.');
//       userInput = prompt('Enter your name:');
//     }

//     if (userInput === 'John') {
//       alert('Hello John! You clicked the button.');
//     } else {
//       alert('Hello ' + userInput + '! You clicked the button.');
//     }
//   });

//   var colorButton = document.getElementById('colorButton');
//   var colorBox = document.getElementById('colorBox');

//   colorButton.addEventListener('click', function() {
//     var randomColor = getRandomColor();
//     colorBox.style.backgroundColor = randomColor;
//   });

//   function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
// });