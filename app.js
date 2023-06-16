
// Dynamic Component 1: Get user Input through a form
let userName = prompt("Hello User, please tell me your name");
console.log(userName);
alert("Welcome to my page " + userName);

document.addEventListener('DOMContentLoaded', function() {
    var nameButton = document.getElementById('nameButton');
    nameButton.addEventListener('click', function() {



// Dynamic Component 2: Conditional Statement - Click a button and get a message response
      var userInput = prompt('Enter your name:');
      
      if (userInput === 'John') {
        alert('Hello John! You clicked the button.');
      } else {
        alert('Hello ' + userInput + '! You clicked the button.');
      }
    });
  });


// Dynamic Component 3: Conditional Statement - Change color on button click
const colorButton = document.getElementById('colorButton');
const colorBox = document.getElementById('colorBox');

colorButton.addEventListener('click', function() {
  const randomNumber = Math.random();
  const threshold = 0.5;
  if (randomNumber < threshold) {
    colorBox.style.backgroundColor = 'red';
  } else {
    colorBox.style.backgroundColor = 'blue';
  }
});

